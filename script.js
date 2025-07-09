const backgroundSelect = document.getElementById('backgroundSelect');
const themeSelect = document.getElementById('themeSelect');

backgroundSelect.addEventListener('change', () => {
  document.body.className = ''; // Сбросить все классы
  document.body.classList.add(backgroundSelect.value);
});

themeSelect.addEventListener('change', () => {
  console.log('Selected chessboard theme:', themeSelect.value);
  // Здесь можно добавить код для смены темы доски
});
