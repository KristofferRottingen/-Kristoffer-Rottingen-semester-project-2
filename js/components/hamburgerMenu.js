const hamburgerMenu = document.querySelector(".hamburger-label");

const nav = document.querySelector(".nav-container");

hamburgerMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
    nav.style.display = "flex";
};
