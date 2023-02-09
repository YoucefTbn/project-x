const menu = document.querySelector(".menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li a");
menu.addEventListener("click", function () {
  menu.classList.toggle("menu-active");
  ul.classList.toggle("nav-active");
  nav.classList.toggle("nav-color");
});

document.addEventListener("scroll", function () {
  let current = "";
  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 110) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach((item) => {
    item.classList.remove("active-section");
    if (item.getAttribute("href") === "#" + current) {
      item.classList.add("active-section");
    }
  });

  console.log(current);
});