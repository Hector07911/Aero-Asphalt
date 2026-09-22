document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.querySelector(".nav-menu");
    const menuToggle = document.querySelector(".menu-toggle");

    hamburgerBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active-menu");
        menuToggle.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en un enlace
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active-menu");
            menuToggle.classList.remove("active");
        });
    });

    // Resaltar página actual
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});