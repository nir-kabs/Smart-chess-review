// Background selector
const backgroundSelect = document.getElementById('backgroundSelect');
backgroundSelect.addEventListener('change', () => {
  document.body.className = ''; // Remove any previous background class
  document.body.classList.add(backgroundSelect.value); // Apply selected background class
});

// Chessboard theme selector
const themeSelect = document.getElementById('themeSelect');
themeSelect.addEventListener('change', () => {
  console.log('Selected chessboard theme:', themeSelect.value);
  // TODO: Apply theme to chessboard when it's implemented
});
