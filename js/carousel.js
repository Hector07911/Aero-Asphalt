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


// Carrusel de artículos (track con botones prev/next + dots)
document.addEventListener('DOMContentLoaded', function () {
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('carouselDots');

  if (!track || !prevBtn || !nextBtn) return;

  const cards = track.querySelectorAll('.article-card');
  const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];
  let currentIndex = 0;

  function goToSlide(index) {
    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;

    currentIndex = index;
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;

    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }

  nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
  prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goToSlide(i));
  });

  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });
  track.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? goToSlide(currentIndex + 1) : goToSlide(currentIndex - 1);
    }
  });

  window.addEventListener('resize', () => goToSlide(currentIndex));

  goToSlide(0);
});