// Keyboard support: allow typing letters, Enter and Backspace
// This file adds a keydown listener that reuses the on-screen buttons' behavior.
window.addEventListener('load', () => {
  const lettersBtn = document.querySelectorAll('.letter');
  const enterButton = document.querySelector('.enter');
  const backspaceBtn = document.querySelector('.backspace');

  document.addEventListener('keydown', (e) => {
    const key = e.key;

    // Letters A-Z
    if (/^[a-zA-Z]$/.test(key)) {
      const id = key.toLowerCase();
      // buttons in index.html use lowercase ids (e.g. id="a")
      let btn = document.getElementById(id);
      if (!btn) {
        // fallback: find button whose text matches (useful if ids differ)
        btn = Array.from(lettersBtn).find(b => b && b.textContent && b.textContent.trim().toUpperCase() === key.toUpperCase());
      }
      if (btn) {
        // Reuse existing click handler logic by triggering click().
        btn.click();
        // Visual feedback for keyboard press (brief)
        btn.style.transform = 'translateY(2px)';
        setTimeout(() => { btn.style.transform = ''; }, 120);
      }
      return;
    }

    // Enter
    if (key === 'Enter') {
      e.preventDefault();
      if (enterButton) enterButton.click();
      return;
    }

    // Backspace
    if (key === 'Backspace') {
      e.preventDefault();
      if (backspaceBtn) backspaceBtn.click();
      return;
    }
  });
});
