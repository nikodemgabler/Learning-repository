const navMenu = document.querySelector(".navbar")
const hamburger = document.querySelector(".navbar__burger")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open")
} )


// const menuBtn = document.querySelector('.navbar__button');
// const hamburger = document.querySelector('.navbar__burger');
// const nav = document.querySelector('.navbar');
// const menuNav = document.querySelector('.navbar__menu');
// const navItems = document.querySelectorAll('.navbar__item');


// let showMenu = false;

// menuBtn.addEventListener('click', toggleMenu);

// function toggleMenu() {
//     if(!showMenu) {
//         hamburger.classList.add('open');
//         nav.classList.add('open');
//         menuNav.classList.add('open');
//         navItems.forEach(item => item.classList.add('open'));


//         showMenu = true;
//     } else {
//         hamburger.classList.remove ('open');
//         nav.classList.remove('open');
//         menuNav.classList.remove('open');
//         navItems.forEach(item => item.classList.remove('open'));

//         showMenu = false;
//     }
// }