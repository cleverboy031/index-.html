// script.js

// Toggle menu
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

// Header hide/show on scroll
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    header.style.top = "-80px"; // hide when scrolling down
  } else {
    header.style.top = "0"; // show when scrolling up
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Change background video (optional)
const video = document.getElementById("bgVideo");
setInterval(() => {
  video.src = video.src.includes("background1.mp4") ? "background2.mp4" : "background1.mp4";
  video.play();
}, 15000); // change every 15s
