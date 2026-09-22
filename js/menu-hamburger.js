document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.querySelector("nav ul");

    hamburgerBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active-menu");
    });
});