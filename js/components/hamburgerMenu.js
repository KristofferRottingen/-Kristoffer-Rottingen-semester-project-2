const hamburgerMenu = document.querySelector(".hamburger-label");

const nav = document.querySelector(".nav-container");

hamburgerMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
    nav.style.display.toggle("flex");
    nav.style.display.toggle("none");
};
