const backgroundSelect = document.getElementById('backgroundSelect');
const themeSelect = document.getElementById('themeSelect');

backgroundSelect.addEventListener('change', () => {
  document.body.className = '';
  document.body.classList.add(backgroundSelect.value);
});

themeSelect.addEventListener('change', () => {
  console.log('Selected chessboard theme:', themeSelect.value);
  // Добавить код смены темы доски здесь
});
