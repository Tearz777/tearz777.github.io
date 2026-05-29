import { initScrollReveal } from './modules/scroll.js';
import { initTheme } from './theme.js';
import './lang.js';

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initTheme();

  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      langButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const selectedLang = e.target.getAttribute('data-lang');
      console.log(`System locale switched to: ${selectedLang}`);
    });
  });

  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.getElementById('navLinks');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
});

document.querySelectorAll('.timeline-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.timeline-item').forEach(i => i.classList.remove('selected'));
    item.classList.toggle('selected');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

console.log('main.js loaded');