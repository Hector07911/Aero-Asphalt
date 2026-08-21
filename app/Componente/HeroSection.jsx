'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  // Parallax state - solo móvil
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const parallaxRef = useRef(null);
  const prefersReducedMotion = useRef(false);

  // Counter animation states - solo móvil
  const [counters, setCounters] = useState({
    hp: 0,
    weight: 0,
    acceleration: 0
  });
  const countersRef = useRef(null);
  const [countersAnimated, setCountersAnimated] = useState(false);

  // Carousel state - solo móvil
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);
  const totalSlides = 4; // 1 para datos, 3 para imágenes

  // Reveal animation state - solo móvil
  const [isVisible, setIsVisible] = useState(false);
  const revealRef = useRef(null);

  // Lightbox state - solo móvil
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = [
    '/marcas/bmw-m4/img-principal.webp',
    '/marcas/bmw-m4/img-second.webp',
    '/marcas/bmw-m4/img-second-2.webp',
    '/marcas/bmw-m4/img-second-3.webp'
  ];

  // Check for reduced motion preference
  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Parallax effect - solo móvil
  useEffect(() => {
    if (prefersReducedMotion.current) return;

    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        const scrollProgress = rect.top / window.innerHeight;
        setParallaxOffset(scrollProgress * 50);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Counter animation - solo móvil
  useEffect(() => {
    if (countersAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCountersAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => observer.disconnect();
  }, [countersAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const startTime = performance.now();
    const targets = { hp: 503, weight: 1725, acceleration: 3.9 };

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounters({
        hp: Math.round(targets.hp * easedProgress),
        weight: Math.round(targets.weight * easedProgress),
        acceleration: (targets.acceleration * easedProgress).toFixed(1)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  // Carousel scroll handler - solo móvil
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const slideWidth = carousel.offsetWidth;
      const slideIndex = Math.round(scrollLeft / slideWidth);
      setActiveSlide(slideIndex);
    };

    carousel.addEventListener('scroll', handleScroll, { passive: true });
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, []);

  // Reveal on scroll - solo móvil
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (revealRef.current) {
      observer.observe(revealRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Lightbox handlers - solo móvil
  const openLightbox = (imageSrc, index) => {
    setLightboxImage(imageSrc);
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateLightbox = (direction) => {
    const newIndex = direction === 'next' 
      ? (lightboxIndex + 1) % images.length 
      : (lightboxIndex - 1 + images.length) % images.length;
    setLightboxIndex(newIndex);
    setLightboxImage(images[newIndex]);
  };

  return (
    <>
      {/* Hero Section Pagani */}
      <section className="relative w-full h-screen bg-black">
        {/* Video responsive */}
        <div className="absolute inset-0 w-full h-full">
          {/* GIF para móvil */}
          <Image 
            src="/video_movil.gif" 
            alt="Hero video mobile" 
            fill
            sizes="100vw"
            className="object-cover md:hidden"
            priority
            unoptimized
          />
          {/* GIF para desktop */}
          <Image 
            src="/video_pc.gif" 
            alt="Hero video desktop" 
            fill
            sizes="100vw"
            className="object-cover hidden md:block"
            priority
            unoptimized
          />
        </div>

        {/* Overlay oscuro para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Texto superpuesto */}
        <div className="absolute inset-0 flex flex-col px-4 md:px-12 lg:px-20">
          {/* Móvil: centrado, menos líneas */}
          <div className="flex flex-col items-center justify-center text-center h-full md:hidden">
            <h2 className="text-white text-lg font-bold tracking-widest mb-2">
              PAGANI HUAYRA
            </h2>
            <h1 className="text-[#C8C8C8] text-5xl font-black tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
              Pasión
            </h1>
          </div>

          {/* Tablet: posición intermedia */}
          <div className="hidden md:flex lg:hidden flex-col items-center justify-center text-center h-full">
            <h2 className="text-[#B8963E] text-xl font-bold tracking-widest mb-2">
              PAGANI HUAYRA
            </h2>
            <h1 className="text-white text-6xl font-black tracking-tighter mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Arte impulsado<br />por la pasión
            </h1>
            <p className="text-neutral-400 text-base font-medium tracking-widest">
              Una historia de innovación
            </p>
          </div>

          {/* PC: diseño editorial, texto desplazado a un lado */}
          <div className="hidden lg:flex flex-col justify-start text-left h-full pt-32 max-w-2xl">
            <h2 className="text-[#B8963E] text-xl font-bold tracking-widest mb-3">
              PAGANI HUAYRA
            </h2>
            <h1 className="text-white text-7xl font-black tracking-tighter mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Arte impulsado<br />por la pasión
            </h1>
            <p className="text-neutral-400 text-lg font-medium tracking-widest">
              Una historia de innovación y excelencia
            </p>
          </div>
        </div>

       {/* Degradado suave hacia negro puro  */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      </section>
 
      <section className="w-full bg-black py-24 md:py-36 px-4 md:px-12 lg:px-20 flex flex-col items-center justify-center text-center">
 
        {/* Línea dorada decorativa arriba */}
        <div className="w-16 h-[1px] bg-[#B8963E] mb-8"></div>
 
                {/* Frase principal */}
        <p
          className="text-neutral-200 text-xl md:text-3xl italic max-w-2xl leading-relaxed tracking-wide"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Diferentes trazos. La misma obsesión.
        </p>
 
        {/* Rombo dorado central en vez de subtexto tipo banner */}
        <div className="mt-6 mb-6 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-neutral-800"></span>
          <span
            className="w-1.5 h-1.5 bg-[#B8963E] rotate-45 inline-block"
            aria-hidden="true"
          ></span>
          <span className="w-8 h-[1px] bg-neutral-800"></span>
        </div>
 
        {/* Eyebrow discreto: contraste conceptual, no es "anuncio" */}
        <p className="text-neutral-500 text-[11px] md:text-[11px] tracking-[0.5em] uppercase transition-colors">
          Módena · Múnich
        </p>

         {/* Línea dorada decorativa arriba */}
        <div className="w-16 h-[1px] bg-[#B8963E] mt-10"></div>
 
      </section>


      {/* BMW Section */}
      <section className="w-full bg-black pt-8 pb-16 px-4 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Contenedor principal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Imagen principal con texto - ocupa 8 columnas en desktop */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* Versión móvil con parallax */}
              <div 
                ref={parallaxRef}
                className="relative aspect-[16/9] overflow-hidden md:hidden"
              >
                <div 
                  style={{ 
                    transform: prefersReducedMotion.current ? 'none' : `translateY(${parallaxOffset}px)`,
                    transition: prefersReducedMotion.current ? 'none' : 'transform 0.1s ease-out'
                  }}
                  className="absolute inset-0"
                >
                  <Image 
                    src="/marcas/bmw-m4/img-principal.webp" 
                    alt="BMW M4 G82" 
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Texto superpuesto en la imagen - móvil */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <h2 className="text-[#B8963E] text-xl font-bold tracking-widest mb-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                    BMW M4 G82
                  </h2>
                  <h1 className="text-white text-3xl font-black tracking-tighter mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                    La perfección<br />alemana
                  </h1>
                  <p className="text-neutral-300 text-sm font-medium opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                    Potencia, elegancia y tecnología de vanguardia en un solo paquete
                  </p>
                </div>
              </div>

              {/* Versión desktop sin parallax */}
              <div className="relative aspect-[16/9] hidden md:block">
                <Image 
                  src="/marcas/bmw-m4/img-principal.webp" 
                  alt="BMW M4 G82" 
                  fill
                  sizes="(max-width: 1200px) 66vw, 66vw"
                  className="object-cover"
                  priority
                />
                {/* Texto superpuesto en la imagen - desktop */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <h2 className="text-[#B8963E] text-3xl font-bold tracking-widest mb-2">
                    BMW M4 G82
                  </h2>
                  <h1 className="text-white text-6xl font-black tracking-tighter mb-4">
                    La perfección<br />alemana
                  </h1>
                  <p className="text-neutral-300 text-lg font-medium">
                    Potencia, elegancia y tecnología de vanguardia en un solo paquete
                  </p>
                </div>
              </div>

              {/* Datos técnicos BMW M4 G82 - solo desktop */}
              <div className="p-6 md:p-8 hidden md:block">
                <div className="grid grid-cols-4 gap-6">
                  <div className="text-center">
                    <p className="text-neutral-400 text-sm mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Motor</p>
                    <p className="text-white text-xl font-bold">3.0L Twin-Turbo</p>
                    <p className="text-neutral-500 text-xs mt-1">S58 Inline-6</p>
                  </div>
                  <div className="text-center">
                    <p className="text-neutral-400 text-sm mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Potencia</p>
                    <p className="text-white text-xl font-bold">503 HP</p>
                    <p className="text-neutral-500 text-xs mt-1">3,750 - 7,250 RPM</p>
                  </div>
                   <div className="text-center">
                    <p className="text-neutral-400 text-sm mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Peso</p>
                    <p className="text-white text-xl font-bold">1,725 kg</p>
                    <p className="text-neutral-500 text-xs mt-1">Coupé</p>
                  </div>
                  <div className="text-center">
                    <p className="text-neutral-400 text-sm mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>0-100 km/h</p>
                    <p className="text-white text-xl font-bold">3.9 s</p>
                    <p className="text-neutral-500 text-xs mt-1">M DCT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Imágenes secundarias - solo desktop */}
            <div className="lg:col-span-4 flex flex-col gap-4 h-full hidden lg:flex">
              <div className="relative flex-1 aspect-auto">
                <Image 
                  src="/marcas/bmw-m4/img-second.webp" 
                  alt="BMW M4 detalle" 
                  fill
                  sizes="(max-width: 1200px) 33vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative flex-1 aspect-auto">
                <Image 
                  src="/marcas/bmw-m4/img-second-2.webp" 
                  alt="BMW M4 interior" 
                  fill
                  sizes="(max-width: 1200px) 33vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative flex-1 aspect-auto">
                <Image 
                  src="/marcas/bmw-m4/img-second-3.webp" 
                  alt="BMW M4 motor" 
                  fill
                  sizes="(max-width: 1200px) 33vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Carrusel móvil - datos técnicos + imágenes secundarias */}
            <div className="col-span-1 lg:hidden">
              <div 
                ref={revealRef}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.5s' }}
              >
                <div 
                  ref={carouselRef}
                  className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                >
                  {/* Slide 1: Datos técnicos */}
                  <div 
                    ref={countersRef}
                    className="flex-shrink-0 w-full snap-center p-6 bg-black"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center" style={{ transitionDelay: '0.1s' }}>
                        <p className="text-neutral-400 text-sm mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Motor</p>
                        <p className="text-white text-lg font-bold">3.0L Twin-Turbo</p>
                        <p className="text-neutral-500 text-xs mt-1">S58 Inline-6</p>
                      </div>
                      <div className="text-center" style={{ transitionDelay: '0.2s' }}>
                        <p className="text-neutral-400 text-sm mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Potencia</p>
                        <p className="text-white text-lg font-bold">{countersAnimated ? counters.hp : 0} HP</p>
                        <p className="text-neutral-500 text-xs mt-1">3,750 - 7,250 RPM</p>
                      </div>
                      <div className="text-center" style={{ transitionDelay: '0.3s' }}>
                        <p className="text-neutral-400 text-sm mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Peso</p>
                        <p className="text-white text-lg font-bold">{countersAnimated ? counters.weight : 0} kg</p>
                        <p className="text-neutral-500 text-xs mt-1">Coupé</p>
                      </div>
                      <div className="text-center" style={{ transitionDelay: '0.4s' }}>
                        <p className="text-neutral-400 text-sm mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>0-100 km/h</p>
                        <p className="text-white text-lg font-bold">{countersAnimated ? counters.acceleration : 0} s</p>
                        <p className="text-neutral-500 text-xs mt-1">M DCT</p>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2: Imagen secundaria 1 */}
                  <div 
                    className="relative aspect-[16/9] flex-shrink-0 w-full snap-center cursor-pointer"
                    onClick={() => openLightbox('/marcas/bmw-m4/img-second.webp', 1)}
                  >
                    <Image 
                      src="/marcas/bmw-m4/img-second.webp" 
                      alt="BMW M4 detalle" 
                      fill
                      sizes="100vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Slide 3: Imagen secundaria 2 */}
                  <div 
                    className="relative aspect-[16/9] flex-shrink-0 w-full snap-center cursor-pointer"
                    onClick={() => openLightbox('/marcas/bmw-m4/img-second-2.webp', 2)}
                  >
                    <Image 
                      src="/marcas/bmw-m4/img-second-2.webp" 
                      alt="BMW M4 interior" 
                      fill
                      sizes="100vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Slide 4: Imagen secundaria 3 */}
                  <div 
                    className="relative aspect-[16/9] flex-shrink-0 w-full snap-center cursor-pointer"
                    onClick={() => openLightbox('/marcas/bmw-m4/img-second-3.webp', 3)}
                  >
                    <Image 
                      src="/marcas/bmw-m4/img-second-3.webp" 
                      alt="BMW M4 motor" 
                      fill
                      sizes="100vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                {/* Carousel dots - solo mobile */}
                <div className="flex justify-center gap-2 mt-4">
                  {[0, 1, 2, 3].map((index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${activeSlide === index ? 'bg-[#B8963E] w-6' : 'bg-neutral-600'}`}
                      onClick={() => {
                        if (carouselRef.current) {
                          carouselRef.current.scrollTo({
                            left: index * carouselRef.current.offsetWidth,
                            behavior: 'smooth'
                          });
                        }
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox - solo mobile */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:hidden">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl hover:text-[#B8963E] transition-colors z-10"
          >
            ×
          </button>
          <button 
            onClick={() => navigateLightbox('prev')}
            className="absolute left-4 text-white text-4xl hover:text-[#B8963E] transition-colors z-10"
          >
            ←
          </button>
          <button 
            onClick={() => navigateLightbox('next')}
            className="absolute right-4 text-white text-4xl hover:text-[#B8963E] transition-colors z-10"
          >
            →
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <Image 
              src={lightboxImage} 
              alt="Lightbox image" 
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}

