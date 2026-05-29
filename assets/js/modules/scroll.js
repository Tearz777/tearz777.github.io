export function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, 
  { threshold: 0.1, rootMargin: '50px 0px 0px 0px' });

  revealElements.forEach(el => observer.observe(el));
  console.log('reveal elements found:', revealElements.length);

  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (nav) nav.style.boxShadow = window.scrollY > 50 ? '0 4px 20px var(--shadow)' : 'none';
  });
}
