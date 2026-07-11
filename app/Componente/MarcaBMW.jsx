'use client';

import Image from 'next/image';

export default function MarcaBMW() {
  return (
    <section className="w-full bg-black py-16 px-4 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Contenedor principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Imagen principal con texto - ocupa 8 columnas en desktop */}
          <div className="lg:col-span-8">
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
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                <h2 className="text-[#B8963E] text-2xl md:text-3xl font-bold tracking-widest mb-2">
                  BMW M4 G82
                </h2>
                <h1 className="text-white text-4xl md:text-6xl font-black tracking-tighter mb-4">
                  La perfección<br />alemana
                </h1>
                <p className="text-neutral-300 text-base md:text-lg font-medium">
                  Potencia, elegancia y tecnología de vanguardia en un solo paquete
                </p>
              </div>
            </div>
          </div>

          {/* Imágenes secundarias - ocupan 4 columnas en desktop */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="relative aspect-[16/9]">
              <Image 
                src="/marcas/bmw-m4/img-second.webp" 
                alt="BMW M4 detalle" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-[16/9]">
              <Image 
                src="/marcas/bmw-m4/img-second-2.webp" 
                alt="BMW M4 interior" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-[16/9]">
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
  );
}
