// assets/js/theme.js

export function initTheme() {

  const savedTheme =
    localStorage.getItem('theme') || 'dark';

  applyTheme(savedTheme);

  const toggles =
    document.querySelectorAll('.theme-toggle');

  toggles.forEach(toggle => {

    toggle.addEventListener('click', () => {

      const currentTheme =
        document.documentElement.dataset.theme === 'light'
          ? 'light'
          : 'dark';

      applyTheme(
        currentTheme === 'light'
          ? 'dark'
          : 'light'
      );

    });

  });

}

function applyTheme(theme) {

  const html =
    document.documentElement;

  if (theme === 'light') {
    html.dataset.theme = 'light';
  } else {
    delete html.dataset.theme;
  }

  localStorage.setItem(
    'theme',
    theme
  );

  updateButtons(theme);

}

function updateButtons(theme) {

  const toggles =
    document.querySelectorAll('.theme-toggle');

  toggles.forEach(toggle => {

    const icon =
      toggle.querySelector('.theme-icon');

    const text =
      toggle.querySelector('.theme-text');

    if (!icon || !text) return;

    if (theme === 'light') {

      icon.textContent = '🌙';
      text.textContent = 'Dark';

    } else {

      icon.textContent = '☀️';
      text.textContent = 'Light';

    }

  });

}