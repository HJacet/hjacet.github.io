const audio = new Audio('assets/mainMenu.mp3');

// Browser blocks this on immediate page load
audio.play().catch(() => {
  // If blocked, wait for user to click anywhere
  document.addEventListener('click', () => {
    audio.play();
  }, { once: true });
});