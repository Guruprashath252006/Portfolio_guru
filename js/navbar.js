import { debounce } from './utils.js';

export const initNavbar = () => {
  const navbar = document.querySelector('.navbar');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (!navbar) return;

  // Handle scroll effects
  const handleScroll = debounce(() => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      // Style could be: backdrop-filter: blur(10px); background: rgba(10,10,10,0.8);
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  window.addEventListener('scroll', handleScroll);

  // Handle mobile menu
  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
};
