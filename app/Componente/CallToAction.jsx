'use client';

import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="w-full bg-black py-24 px-4 flex flex-col items-center justify-center min-h-screen">
      <div className="mx-auto max-w-4xl text-center">
        <div className="w-24 h-px bg-[#B8963E] mx-auto mb-8"></div>
        <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-widest mb-6">
          AERO <span className="text-[#B8963E]">&</span> ASPHALT
        </h1>
        <h2 className="text-[#B8963E] text-lg md:text-xl font-light tracking-widest mb-12 uppercase">
          DONDE EL ASFALTO SE CONVIERTE EN ARTE
        </h2>
        <p className="text-white text-base md:text-lg font-light tracking-widest mb-8">
          Diseño, ingeniería y pasión
        </p>
        <p className="text-[#C8C8C8] text-lg md:text-xl font-light tracking-widest mb-12 uppercase">
          Todo reunido en un mismo lugar
        </p>
        <button className="border border-[#B8963E] text-[#B8963E] px-10 py-4 text-base font-medium tracking-widest hover:bg-[#B8963E] hover:text-black transition-all duration-300">
          <Link href="/coleccion">
            EXPLORAR COLECCIÓN
          </Link>
        </button>
        <div className="w-24 h-px bg-[#B8963E] mx-auto mb-12"></div>
        <p className="text-[#C8C8C8] text-lg md:text-xl font-light tracking-widest mb-12 uppercase">
          Cada automóvil cuenta una historia, Descubre las que dejaron huella
        </p>
      </div>
    </section>
  );
}
