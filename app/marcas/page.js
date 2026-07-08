'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '../Componente/Footer';

const BRANDS = [
  {
    id: 'bmw',
    name: 'BMW',
    philosophy: 'Precisión alemana.',
    image: '/marcas/bmw/bmw.jpg',
  },
  {
    id: 'porsche',
    name: 'Porsche',
    philosophy: 'La evolución de un icono.',
    image: '/marcas/porsche/porsche.jpg',
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    philosophy: 'Pasión hecha velocidad.',
    image: '/marcas/ferrari/ferrari.jpg',
  },
  {
    id: 'pagani',
    name: 'Pagani',
    philosophy: 'Donde el arte encuentra la ingeniería.',
    image: '/marcas/pagani/Pagani.jpg',
  },
  {
    id: 'mclaren',
    name: 'McLaren',
    philosophy: 'Innovación nacida en la competición.',
    image: '/marcas/mclaren/mclaren.jpg',
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    philosophy: 'Diseñado para romper las reglas.',
    image: '/marcas/lamborghini/lamborghini.jpg',
  },
  {
    id: 'audi',
    name: 'Audi',
    philosophy: 'Tecnología con carácter.',
    image: '/marcas/audi/audi.jpg',
  },
  {
    id: 'aston-martin',
    name: 'Aston Martin',
    philosophy: 'Elegancia británica.',
    image: '/marcas/aston-martin/aston-martin.jpg',
  },
  {
    id: 'mazda',
    name: 'Mazda',
    philosophy: 'La emoción de conducir.',
    image: '/marcas/mazda/mazda.jpg',
  },
  {
    id: 'nissan',
    name: 'Nissan',
    philosophy: 'Ingeniería que desafía expectativas.',
    image: '/marcas/nissan/gtr.jpg',
  },
  {
    id: 'rolls-royce',
    name: 'Rolls Royce',
    philosophy: 'La excelencia en cada detalle.',
    image: '/marcas/rolls/royce.jpg',
  }
];

export default function Marcas() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      
      {/* HERO */}
      <section className="relative h-screen overflow-hidden bg-[#0A0A0A]">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <Image
            src="/marcas/hero-principal.png"
            alt="Marcas hero"
            fill
            sizes="100vw"
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto">
          {/* Top Label */}
          <div className="text-[#808080] text-[clamp(0.75rem,1vw,0.9rem)] tracking-[0.3em] uppercase mb-8">
            EMBLEMAS QUE HICIERON HISTORIA
          </div>

          {/* Main Title */}
          <h1 className="text-white text-[clamp(5rem,10vw,9rem)] font-bold tracking-tighter mb-8">
            MARCAS
          </h1>

          {/* Subtitle */}
          <p className="text-[#A0A0A0] text-[clamp(1.4rem,2vw,1.8rem)] font-light tracking-wide mb-16 max-w-3xl leading-relaxed">
            Más que fabricantes.<br />
            Filosofías que definieron generaciones.
          </p>

          {/* Bottom Label */}
          <div className="text-[#606060] text-[clamp(0.75rem,1vw,0.9rem)] tracking-[0.25em] uppercase mb-12">
            DISEÑO • INGENIERÍA • LEGADO
          </div>

          {/* CTA Button */}
          <Link
            href="#explorar"
            className="group relative px-12 py-4 border border-white/30 text-white text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-[#0A0A0A] transition-all duration-500 ease-out"
          >
            Explorar marcas →
          </Link>
        </div>
      </section>

      {/* EXPLORAR POR MARCA */}
      <section id="explorar" className="py-32 px-4 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Title */}
          <div className="text-center mb-24">
            <h2 className="text-white text-[clamp(48px,6vw,60px)] font-bold tracking-tight mb-6">
              Explorar por marca
            </h2>
            <div className="w-24 h-px bg-[#B8963E] mx-auto" />
          </div>

          {/* Brand Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BRANDS.map((brand, index) => (
              <Link
                key={brand.id}
                href={`/marcas/${brand.id}`}
                className="group relative aspect-[4/5] overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-700 ease-out" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-white text-[clamp(32px,4vw,48px)] font-bold tracking-tight mb-4 transition-transform duration-700 ease-out group-hover:translate-y-[-8px]">
                    {brand.name}
                  </h3>
                  <p className="text-[#A0A0A0] text-lg tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out delay-100 transform translate-y-8 group-hover:translate-y-0">
                    {brand.philosophy}
                  </p>
                  <div className="mt-6 text-[#B8963E] text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out delay-200 transform translate-y-8 group-hover:translate-y-0">
                    Explorar →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Message */}
      <section className="py-24 px-4 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#808080] text-[clamp(0.75rem,1vw,0.9rem)] tracking-[0.3em] uppercase mb-6">
            TRANSMITIR LEGADO
          </div>
          <p className="text-[#A0A0A0] text-[clamp(1rem,1.5vw,1.2rem)] font-light tracking-wide leading-relaxed mb-8">
            "Un automóvil es más que una máquina. Es el resultado del diseño, la ingeniería y la pasión de quienes lo hicieron posible. No importa su origen, su época o su precio. Si logra emocionar a quien lo contempla, merece ser recordado."
          </p>
          <div className="text-[#606060] text-[clamp(0.75rem,1vw,0.9rem)] tracking-[0.25em] uppercase">
            PASIÓN • CULTURA • DISEÑO
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
