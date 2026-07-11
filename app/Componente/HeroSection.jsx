'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
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
          <h1 className="text-[#C8C8C8] text-5xl font-black tracking-tighter">
            Pasión
          </h1>
        </div>

        {/* Tablet: posición intermedia */}
        <div className="hidden md:flex lg:hidden flex-col items-center justify-center text-center h-full">
          <h2 className="text-[#E6E6E6] text-xl font-bold tracking-widest mb-2">
            PAGANI HUAYRA
          </h2>
          <h1 className="text-white text-6xl font-black tracking-tighter mb-4">
            Arte impulsado<br />por la pasión
          </h1>
          <p className="text-neutral-400 text-base font-medium tracking-widest">
            Una historia de innovación
          </p>
        </div>

        {/* PC: diseño editorial, texto desplazado a un lado */}
        <div className="hidden lg:flex flex-col justify-start text-left h-full pt-32 max-w-2xl">
          <h2 className="text-[#E6E6E6] text-xl font-bold tracking-widest mb-3">
            PAGANI HUAYRA
          </h2>
          <h1 className="text-white text-7xl font-black tracking-tighter mb-6 leading-tight">
            Arte impulsado<br />por la pasión
          </h1>
          <p className="text-neutral-400 text-lg font-medium tracking-widest">
            Una historia de innovación y excelencia
          </p>
        </div>
      </div>
    </section>
  );
}
