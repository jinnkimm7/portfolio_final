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

