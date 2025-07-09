// Theme selector for chessboard (placeholder)
const themeSelect = document.getElementById('themeSelect');
themeSelect.addEventListener('change', () => {
  console.log('Selected chessboard theme:', themeSelect.value);
  // TODO: implement real theme switching for the board
});

// Background selector
const backgroundSelect = document.getElementById('backgroundSelect');
backgroundSelect.addEventListener('change', () => {
  document.body.className = backgroundSelect.value;
});
