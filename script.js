const boardElement = document.getElementById('board');
const themeSelect = document.getElementById('themeSelect');

const boardThemes = {
  classic: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png',
  modern: 'https://images.chesscomfiles.com/chess-themes/pieces/neo/150/{piece}.png'
};

let currentTheme = 'classic';

const chess = new Chess();

const config = {
  draggable: true,
  position: 'start',
  pieceTheme: function(piece) {
    return boardThemes[currentTheme].replace('{piece}', piece);
  },
  onDrop: function(source, target) {
    const move = chess.move({ from: source, to: target, promotion: 'q' });
    if (move === null) return 'snapback';
  }
};

let board = Chessboard(boardElement, config);

themeSelect.addEventListener('change', () => {
  currentTheme = themeSelect.value;
  board.destroy();
  config.pieceTheme = function(piece) {
    return boardThemes[currentTheme].replace('{piece}', piece);
  };
  board = Chessboard(boardElement, config);
});
