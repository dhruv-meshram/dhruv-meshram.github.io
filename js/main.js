/* ============================================================
   MAIN JS — Nav toggle, active section tracking
   ============================================================ */

(function () {
  'use strict';

  // ── Mobile nav toggle ──
  const toggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('nav-mobile');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.classList.toggle('is-open');
      mobileNav.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on mobile link click
    mobileNav.querySelectorAll('.navbar__mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('is-open');
        mobileNav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── Active nav link on scroll ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link[href^="#"]');

  function setActiveLink() {
    const scrollY = window.scrollY + 80;
    let current = '';

    sections.forEach(section => {
      if (section.offsetTop <= scrollY) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href').slice(1);
      link.classList.toggle('is-active', href === current);
    });
  }

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

})();
