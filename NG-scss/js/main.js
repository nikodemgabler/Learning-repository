const navMenu = document.querySelector(".navbar__menu")
const hamburger = document.querySelector(".navbar__burger")
const navButton = document.querySelector(".navbar__button")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open")
    navMenu.classList.toggle("close")
    navButton.classList.toggle("close")
} );