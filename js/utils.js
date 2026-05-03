/**
 * Debounce function to limit how often a function runs
 */
export const debounce = (func, wait = 20, immediate = true) => {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

/**
 * Fetch a component/section and inject it into the DOM
 */
export const loadSection = async (sectionName, targetElementId) => {
  try {
    const response = await fetch(`./sections/${sectionName}.html`);
    if (!response.ok) throw new Error(`Failed to load ${sectionName}`);
    
    const html = await response.text();
    const target = document.getElementById(targetElementId);
    if (target) {
      target.innerHTML = html;
      return true;
    }
  } catch (error) {
    console.error('Error loading section:', error);
    return false;
  }
};
