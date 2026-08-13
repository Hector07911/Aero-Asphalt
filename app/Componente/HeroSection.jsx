'use client';

import Image from 'next/image';

export default function HeroSection() {
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
              <div className="relative aspect-[16/9]">
                <Image 
                  src="/marcas/bmw-m4/img-principal.webp" 
                  alt="BMW M4 G82" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw"
                  className="object-cover"
                  priority
                />
                {/* Texto superpuesto en la imagen */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 md:p-8">
                  <h2 className="text-[#B8963E] text-xl md:text-3xl font-bold tracking-widest mb-2">
                    BMW M4 G82
                  </h2>
                  <h1 className="text-white text-3xl md:text-6xl font-black tracking-tighter mb-4">
                    La perfección<br />alemana
                  </h1>
                  <p className="text-neutral-300 text-sm md:text-lg font-medium">
                    Potencia, elegancia y tecnología de vanguardia en un solo paquete
                  </p>
                </div>
              </div>

              {/* Datos técnicos BMW M4 G82 */}
              <div className=" p-6 md:p-8">
                <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
                  <div className="flex-shrink-0 w-32 md:w-auto text-center">
                    <p className="text-neutral-400 text-sm mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Motor</p>
                    <p className="text-white text-lg md:text-xl font-bold">3.0L Twin-Turbo</p>
                    <p className="text-neutral-500 text-xs mt-1">S58 Inline-6</p>
                  </div>
                  <div className="flex-shrink-0 w-32 md:w-auto text-center">
                    <p className="text-neutral-400 text-sm mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Potencia</p>
                    <p className="text-white text-lg md:text-xl font-bold">503 HP</p>
                    <p className="text-neutral-500 text-xs mt-1">3,750 - 7,250 RPM</p>
                  </div>
                   <div className="flex-shrink-0 w-32 md:w-auto text-center">
                    <p className="text-neutral-400 text-sm mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Peso</p>
                    <p className="text-white text-lg md:text-xl font-bold">1,725 kg</p>
                    <p className="text-neutral-500 text-xs mt-1">Coupé</p>
                  </div>
                  <div className="flex-shrink-0 w-32 md:w-auto text-center">
                    <p className="text-neutral-400 text-sm mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>0-100 km/h</p>
                    <p className="text-white text-lg md:text-xl font-bold">3.9 s</p>
                    <p className="text-neutral-500 text-xs mt-1">M DCT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Imágenes secundarias - ocupan 4 columnas en desktop */}
            <div className="lg:col-span-4 flex flex-col gap-4 h-full">
              <div className="relative aspect-[16/9] lg:flex-1 lg:aspect-auto">
                <Image 
                  src="/marcas/bmw-m4/img-second.webp" 
                  alt="BMW M4 detalle" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[16/9] lg:flex-1 lg:aspect-auto">
                <Image 
                  src="/marcas/bmw-m4/img-second-2.webp" 
                  alt="BMW M4 interior" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[16/9] lg:flex-1 lg:aspect-auto">
                <Image 
                  src="/marcas/bmw-m4/img-second-3.webp" 
                  alt="BMW M4 motor" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

