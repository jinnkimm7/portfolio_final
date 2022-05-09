'use strict';

// make navbar dark when scrolled
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
    scrollIntoView(link);
  }
})

// handle click on 'contact me' button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
})

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}