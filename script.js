const backgroundSelect = document.getElementById('backgroundSelect');
backgroundSelect.addEventListener('change', () => {
  document.body.className = '';
  document.body.classList.add(backgroundSelect.value);
});

const themeSelect = document.getElementById('themeSelect');
themeSelect.addEventListener('change', () => {
  console.log('Selected chessboard theme:', themeSelect.value);
});
