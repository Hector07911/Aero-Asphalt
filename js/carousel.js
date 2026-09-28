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

(() => {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const mqDesktop = window.matchMedia('(min-width: 601px)');
  const mqReduce  = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Ahorro de datos / conexión lenta
  const conn = navigator.connection || {};
  const saveData = conn.saveData || /(^|-)2g$/.test(conn.effectiveType || '');

  let video = null;

  function createVideo() {
    video = document.createElement('video');
    video.className = 'hero__video';
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;
    video.preload = 'metadata';
    video.setAttribute('muted', '');
    video.setAttribute('aria-hidden', 'true');

    [
      { src: hero.dataset.webm, type: 'video/webm' },
      { src: hero.dataset.mp4,  type: 'video/mp4' }
    ].forEach(({ src, type }) => {
      if (!src) return;
      const source = document.createElement('source');
      source.src = src;
      source.type = type;
      video.appendChild(source);
    });

    // Fade-in cuando realmente empieza a reproducirse
    video.addEventListener('playing', () => video.classList.add('is-playing'), { once: true });

    hero.prepend(video);
    video.play().catch(() => { /* si falla el autoplay, queda la imagen */ });
  }

  function init() {
    if (video) return; // ya cargado
    if (!mqDesktop.matches || mqReduce.matches || saveData) return;
    createVideo();
  }

  init();

  // Si el usuario agranda la ventana (o gira la tablet), carga el video entonces
  mqDesktop.addEventListener('change', init);

  // Pausa el video cuando el hero no se ve (ahorra CPU y batería)
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      if (!video) return;
      entry.isIntersecting ? video.play().catch(() => {}) : video.pause();
    }, { threshold: 0.1 }).observe(hero);
  }
})();