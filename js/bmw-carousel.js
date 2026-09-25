document.addEventListener('DOMContentLoaded', function() {
  const bmwCarousel = document.querySelector('.carousel[data-carousel="bmw-unified"]');
  if (!bmwCarousel) return;

  const mediaQuery = window.matchMedia('(max-width: 768px)');
  let carouselInstance = null;

  function initCarousel(carouselEl) {
    const slides = carouselEl.querySelectorAll('.carousel-slide');
    const indicators = carouselEl.querySelectorAll('.indicator');
    const slideInterval = 4000;
    if (slides.length === 0) return null;

    let currentSlide = 0;
    let autoplayTimer = null;

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      indicators.forEach(indicator => indicator.classList.remove('active'));
      slides[index].classList.add('active');
      if (indicators[index]) indicators[index].classList.add('active');
      currentSlide = index;
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(nextSlide, slideInterval);
    }

    function stopAutoplay() {
      clearInterval(autoplayTimer);
    }

    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        showSlide(index);
        startAutoplay();
      });
    });

    let touchStartX = 0;
    carouselEl.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      stopAutoplay();
    });
    carouselEl.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        diff > 0 ? nextSlide() : showSlide((currentSlide - 1 + slides.length) % slides.length);
      }
      startAutoplay();
    });

    startAutoplay();
    return { stopAutoplay };
  }

  function handleScreenChange(e) {
    if (e.matches && !carouselInstance) {
      carouselInstance = initCarousel(bmwCarousel);
    } else if (!e.matches && carouselInstance) {
      carouselInstance.stopAutoplay();
      carouselInstance = null;
    }
  }

  handleScreenChange(mediaQuery);
  mediaQuery.addEventListener('change', handleScreenChange);
});