const menu = document.querySelector('.menu');
const navbar = document.querySelector('nav');
const topNav = document.querySelector('.nav-bar');
const bottomNav = document.querySelectorAll('.item');
const botNav = document.querySelectorAll('.nav-items');
const exitButton = document.querySelector('.close');

function openMenu() {
  document.body.style.position = 'fixed';
  document.body.style.overflow = 'hidden';
  navbar.classList.add('open-menu');
  botNav.classList.add('nav-items');
  bottomNav.classList.add('item');
}

function resetMenu() {
  document.body.style.position = 'relative';
  document.body.style.overflow = 'scroll';
  navbar.classList.remove('open-menu');
}

function resizeWindow() {
  if (window.innerWidth > 768) {
    resetMenu();
  }
}

exitButton.addEventListener('click', resetMenu);
window.addEventListener('resize', resizeWindow);
menu.addEventListener('click', openMenu);








