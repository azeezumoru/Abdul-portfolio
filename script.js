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
btnClose.addEventListener('click', () => {
  if (navMenu.style.display === 'flex') {
    navMenu.style.display = 'none';
    btnClose.style.display = 'none';
  }
});
for (let i = 0; i < menuItem.length; i += 1) {
  menuItem[i].onclick = () => {
    navMenu.style.display = 'none';
    btnClose.style.display = 'none';
    // eslint-disable-next-line no-restricted-globals
    location.target();
  };
}
