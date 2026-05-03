import { initCursor } from './cursor.js';
import { initNavbar } from './navbar.js';
import { initAnimations } from './animations.js';
import { loadSection } from './utils.js';

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Initialize core features immediately
  initCursor();
  initNavbar();

  // 2. Load Sections Dynamically
  const sectionsToLoad = [
    { name: 'hero', id: 'hero-container' },
    { name: 'about', id: 'about-container' },
    { name: 'projects', id: 'projects-container' },
    { name: 'skills', id: 'skills-container' },
    { name: 'contact', id: 'contact-container' },
    { name: 'footer', id: 'footer-container' }
  ];

  // Load all sections
  await Promise.all(
    sectionsToLoad.map(sec => loadSection(sec.name, sec.id))
  );

  // 3. Initialize animations AFTER content is loaded
  // We need a small timeout to let the DOM paint after innerHTML updates
  setTimeout(() => {
    initAnimations();
    
    // Also re-trigger custom cursor interactables if any new elements were added
    // The initCursor already binds to existing elements, but for dynamically loaded ones:
    // A more advanced cursor script would use event delegation or MutationObserver.
    // For this simple portfolio, we just re-run initAnimations to grab new .reveal classes.
  }, 100);
  
  // 4. Load projects data (Optional demonstration)
  fetch('./data/projects.json')
    .then(res => res.json())
    .then(data => {
      console.log('Projects loaded:', data);
      // Here you would render projects into the DOM
    })
    .catch(err => console.error('Error loading projects data:', err));
});
