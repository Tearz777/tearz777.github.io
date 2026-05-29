const translations = {};

async function loadTranslations() {
  const module = await import('../../data/translations.js');
  Object.assign(translations, module.default);
}

function syncLangButtons(lang) {
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = lang === 'id' ? 'EN' : 'ID';
  });
}

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);
  syncLangButtons(lang);
}

window.__applyLang = applyLang;

document.addEventListener('DOMContentLoaded', async () => {
  await loadTranslations();

  const savedLang = localStorage.getItem('lang') || 'id';
  applyLang(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('lang') || 'id';
      applyLang(current === 'id' ? 'en' : 'id');
    });
  });
});