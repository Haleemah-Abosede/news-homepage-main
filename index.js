const menu = document.querySelector(".menu");
const navItems = document.querySelector(".nav-list");
const close = document.querySelector(".close");
const body = document.querySelector("body");

menu.onclick = () => {
  navItems.classList.toggle("active");
  body.classList.toggle("blur");
};

navItems.onclick = () => {
  navItems.classList.remove("active");
  body.classList.remove("blur");
};

close.onclick = () => {
  navItems.classList.remove("active");
  body.classList.remove("blur");
};

window.onscroll = () => {
  navItems.classList.remove("active");
  body.classList.remove("blur");
};
