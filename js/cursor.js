export const initCursor = () => {
  // Only run on non-touch devices
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  // Styling via JS for injection, or can be moved to CSS
  cursor.style.position = 'fixed';
  cursor.style.top = '0';
  cursor.style.left = '0';
  cursor.style.width = '20px';
  cursor.style.height = '20px';
  cursor.style.border = '2px solid var(--color-accent)';
  cursor.style.borderRadius = '50%';
  cursor.style.pointerEvents = 'none';
  cursor.style.transform = 'translate(-50%, -50%)';
  cursor.style.transition = 'width 0.2s, height 0.2s, background-color 0.2s';
  cursor.style.zIndex = '9999';
  cursor.style.mixBlendMode = 'difference';

  document.addEventListener('mousemove', (e) => {
    // Smooth follow
    requestAnimationFrame(() => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  });

  // Hover effect on interactable elements
  const interactables = document.querySelectorAll('a, button, input, textarea, .hover-target');
  
  interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '40px';
      cursor.style.height = '40px';
      cursor.style.backgroundColor = 'rgba(255,255,255,0.1)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      cursor.style.backgroundColor = 'transparent';
    });
  });
};
