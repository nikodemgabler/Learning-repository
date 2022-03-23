const navMenu = document.querySelector(".navbar__menu")
const hamburger = document.querySelector(".navbar__burger")
const navButton = document.querySelector(".navbar__button")
// nie lapiemy JSem rzeczy po klasach htmlowych, klasy są dla CSS. Do JSa uzywamy data-attributes https://javascript.plainenglish.io/quick-guide-to-using-data-attributes-f1f2c3161d5f

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open")
    navMenu.classList.toggle("close")
    navButton.classList.toggle("close")
} );

// wszystko co powyzej owrapuj we funkcje 