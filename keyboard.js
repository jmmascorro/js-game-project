// Keyboard support: allow typing letters, Enter and Backspace
// This file adds a keydown listener that reuses the on-screen buttons' behavior.
window.addEventListener('load', () => {
  const lettersBtn = document.querySelectorAll('.letter');
  const enterButton = document.querySelector('.enter');
  const backspaceBtn = document.querySelector('.backspace');

  // Use capture phase so this handler runs before bubble-phase handlers
  document.addEventListener('keydown', (e) => {
    const key = e.key;

    // Letters A-Z
    if (/^[a-zA-Z]$/.test(key)) {
      // prevent other listeners from also handling this key
      e.preventDefault();
      // stop other listeners (capture or bubble) from running for this event
      e.stopImmediatePropagation();

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
      e.stopImmediatePropagation();
      if (enterButton) enterButton.click();
      return;
    }

    // Backspace
    if (key === 'Backspace') {
      e.preventDefault();
      e.stopImmediatePropagation();
      if (backspaceBtn) backspaceBtn.click();
      return;
    }
  }, true);
});
