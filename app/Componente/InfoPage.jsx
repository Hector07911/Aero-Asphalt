'use client';

import Image from 'next/image';

export default function InfoPage() {
  return (
    <section className="w-full bg-black py-16 px-4 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Texto inmediato - carga instantánea sin bloqueo */}
        <div className="mb-12">
          <h1 className="text-white text-4xl md:text-6xl font-black tracking-tighter mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl font-medium max-w-3xl">
            Ofrecemos soluciones premium para el cuidado y personalización de vehículos de alta gama.
            Nuestro equipo de expertos garantiza resultados excepcionales con la más alta tecnología.
          </p>
        </div>

        {/* Grid de imágenes .webp con lazy loading automático */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Imagen 1 - Lazy loading automático por defecto en Next.js */}
          <div className="relative aspect-[4/3]">
            <Image
              src="/marcas/bmw-m4/img-principal.webp"
              alt="BMW M4 G82"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white text-lg font-bold">Detailing Premium</h3>
            </div>
          </div>

          {/* Imagen 2 - Lazy loading automático */}
          <div className="relative aspect-[4/3]">
            <Image
              src="/marcas/bmw-m4/img-second.webp"
              alt="BMW M4 detalle"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white text-lg font-bold">Protección Cerámica</h3>
            </div>
          </div>

          {/* Imagen 3 - Lazy loading automático */}
          <div className="relative aspect-[4/3]">
            <Image
              src="/marcas/bmw-m4/img-second-2.webp"
              alt="BMW M4 interior"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white text-lg font-bold">Wrapping Completo</h3>
            </div>
          </div>

          {/* Imagen 4 - Lazy loading automático */}
          <div className="relative aspect-[4/3]">
            <Image
              src="/marcas/bmw-m4/img-second-3.webp"
              alt="BMW M4 motor"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white text-lg font-bold">Restauración de Pintura</h3>
            </div>
          </div>

          {/* Imagen 5 - Lazy loading automático */}
          <div className="relative aspect-[4/3]">
            <Image
              src="/PorscheGT3.webp"
              alt="Porsche GT3"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white text-lg font-bold">Limpieza de Interiores</h3>
            </div>
          </div>

          {/* Imagen 6 - Lazy loading automático */}
          <div className="relative aspect-[4/3]">
            <Image
              src="/arte.webp"
              alt="Arte automotriz"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white text-lg font-bold">Mantenimiento Premium</h3>
            </div>
          </div>
        </div>

        {/* Texto adicional que carga inmediatamente */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h2 className="text-[#B8963E] text-2xl md:text-3xl font-bold tracking-widest mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-neutral-300 text-base md:text-lg font-medium max-w-3xl">
            Con más de 10 años de experiencia en el sector automotriz de lujo, combinamos técnica artesanal
            con tecnología de vanguardia para entregar resultados que superan las expectativas más exigentes.
          </p>
        </div>
      </div>
    </section>
  );
}
