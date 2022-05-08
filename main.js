'use strict';

// make navbar blue when scrolled
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.clientHeight;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark')
  }
})

// scroll to section
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  } else {
    const scrollTo = document.querySelector(`${link}`);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
  }
})
