const slider = document.querySelector('.manmflInner');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  // Get initial click position
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  // Change cursor to indicate grabbing
  slider.style.cursor = 'grabbing';
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.style.cursor = 'grab';
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.style.cursor = 'grab';
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; 
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  // Adjust the '3' to change scroll speed/sensitivity
  const walk = (x - startX) * 2; 
  slider.scrollLeft = scrollLeft - walk;
});

// Set initial cursor style
slider.style.cursor = 'grab';