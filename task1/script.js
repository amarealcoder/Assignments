const menuBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('nav-display');
});
