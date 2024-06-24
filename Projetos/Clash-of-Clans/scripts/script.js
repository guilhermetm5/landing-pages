// Script JavaScript para o projeto
let menu = document.querySelector('#icon-menu');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

const sr = ScrollReveal({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true,
});

sr.reveal('.witch-text', { delay: 200, origin: 'top' });
sr.reveal('.witch-img', { delay: 450, origin: 'top' });
sr.reveal('.icons', { delay: 500, origin: 'left' });
sr.reveal('.scroll-down', { delay: 500, origin: 'down' });
