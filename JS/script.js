// Create Scroll-To-Top Button
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '↑';
scrollBtn.id = 'scrollToTopBtn';
document.body.appendChild(scrollBtn);

// Style the button via JavaScript (can be moved to CSS if preferred)
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '20px';
scrollBtn.style.left = '20px';
scrollBtn.style.padding = '10px 14px';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.backgroundColor = 'gold';
scrollBtn.style.color = '#000';
scrollBtn.style.fontSize = '18px';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.zIndex = '9999';
scrollBtn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
scrollBtn.style.display = 'none';
scrollBtn.style.transition = 'opacity 0.3s ease-in-out';

// Show/Hide button based on scroll position
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Scroll to top smoothly
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
