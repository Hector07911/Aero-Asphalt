// Carrusel principal - Solo se ejecuta si existe en la página
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

if (slides.length > 0) {
    let currentSlide = 0;
    const slideInterval = 4000; // 4 segundos

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Auto-play
    setInterval(nextSlide, slideInterval);

    // Click en indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });
}

// Sistema de navegación activa - Marca el enlace actual
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        // Remove active class from all links
        link.classList.remove('active');

        // Obtener el href del enlace
        const linkHref = link.getAttribute('href');
        
        // Verificar si el enlace coincide con la página actual
        if (currentPath.includes(linkHref) || 
            (currentPath.endsWith('/') && linkHref === 'index.html') ||
            (currentPath.includes('articulos/') && linkHref.includes('articulos')) ||
            (currentPath.includes('componentes/') && linkHref.includes(currentPath.split('/').pop()))) {
            link.classList.add('active');
        }
    });
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', setActiveNavLink);