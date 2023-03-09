const hamgurger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const btnClose = document.querySelector('.close');
const menuItem = document.querySelectorAll('.nav-link');

hamgurger.addEventListener('click', () => {
  if (navMenu.style.display === 'none' || btnClose.style.display === 'none') {
    navMenu.style.display = 'flex';
    btnClose.style.display = 'block';
  } else {
    navMenu.style.display = 'none';
  }
});
