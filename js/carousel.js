// Carrusel principal - Solo se ejecuta si existe en la página
// Carrusel principal (hero) - scoped para no chocar con otros carruseles
const heroCarousel = document.getElementById('heroCarousel');

if (heroCarousel) {
  const slides = heroCarousel.querySelectorAll('.carousel-slide');
  const indicators = heroCarousel.querySelectorAll('.indicator');
  let currentSlide = 0;
  const slideInterval = 4000;

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

  setInterval(nextSlide, slideInterval);

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => showSlide(index));
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

// Carrusel de artículos con Scroll Snap nativo
document.addEventListener('DOMContentLoaded', function () {
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('carouselDots');

  if (!track || !prevBtn || !nextBtn) return;

  const cards = track.querySelectorAll('.article-card');
  const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];

  // Función para ir a una tarjeta específica usando el scroll nativo
  function goToSlide(index) {
    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;

    // Calculamos la posición exacta basándonos en el ancho del contenedor del track
    const scrollPosition = index * track.clientWidth;
    
    track.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }

  // Actualizar los puntos activos según la posición actual del scroll
  function updateDots() {
    if (!dots.length) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  // Eventos de botones
  nextBtn.addEventListener('click', () => {
    const currentIndex = Math.round(track.scrollLeft / track.clientWidth);
    goToSlide(currentIndex + 1);
  });

  prevBtn.addEventListener('click', () => {
    const currentIndex = Math.round(track.scrollLeft / track.clientWidth);
    goToSlide(currentIndex - 1);
  });

  // Eventos de los puntos indicadores (dots)
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goToSlide(i));
  });

  // Sincronizar los puntos cuando el usuario desliza con el dedo
  track.addEventListener('scroll', () => {
    updateDots();
  });
});