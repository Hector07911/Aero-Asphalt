'use client';

import { useState, useEffect } from 'react';
import autos from '../../../data/autos.json';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Footer from '../../Componente/Footer';

function CarImage({ src, alt, className, fill, priority }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className={`bg-[#1a1a1a] flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <div className="text-neutral-400 text-4xl mb-2">🚗</div>
          <div className="text-white/50 text-xs font-mono">IMAGEN NO DISPONIBLE</div>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={fill ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : undefined}
      className={className}
      priority={priority}
      onError={() => setImageError(true)}
    />
  );
}

export default function AutoDetalle() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [auto, setAuto] = useState(null);
  
  useEffect(() => {
    const foundAuto = autos.find((a) => a.id === params.id);
    setAuto(foundAuto);
  }, [params.id]);

  if (!auto) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-4xl mb-4">Cargando...</h1>
        </div>
      </div>
    );
  }

  const allImages = [auto.imagenes.principal, ...auto.imagenes.galeria];

  const handleImageClick = (index) => {
    setCurrentGalleryIndex(index);
    setSelectedImage(allImages[index]);
  };

  const handleNextImage = () => {
    const nextIndex = (currentGalleryIndex + 1) % allImages.length;
    setCurrentGalleryIndex(nextIndex);
    setSelectedImage(allImages[nextIndex]);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentGalleryIndex - 1 + allImages.length) % allImages.length;
    setCurrentGalleryIndex(prevIndex);
    setSelectedImage(allImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-black pt-[120px] pb-20">
      {/* Navegación */}
      <div className="px-4 md:px-12 lg:px-20 mb-8">
        <Link 
          href="/coleccion"
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[2px] text-neutral-400 hover:text-white transition-colors"
        >
          ← VOLVER A COLECCIÓN
        </Link>
      </div>

      {/* Header */}
      <div className="px-4 md:px-12 lg:px-20 mb-12">
        <div className="font-mono text-[10px] tracking-[4px] text-neutral-400 mb-4">
          {auto.marca}
        </div>
        <h1 className="font-bold text-[clamp(40px,5vw,64px)] tracking-tighter text-white leading-none mb-4">
          {auto.nombre}
        </h1>
        <div className="flex items-center gap-4 font-mono text-[12px] tracking-[2px] text-white/40">
          <span>{auto.modelo}</span>
          <span className="text-neutral-600">—</span>
          <span>{auto.categoria}</span>
        </div>
      </div>

      {/* Layout principal: Galería izquierda, Información derecha */}
      <div className="px-4 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Columna izquierda: Galería de imágenes */}
        <div className="lg:col-span-7">
          <div className="font-mono text-[10px] tracking-[4px] text-neutral-400 mb-6">
            GALERÍA
          </div>
          
          {/* Imagen principal */}
          <div 
            className="relative aspect-video bg-[#111] border border-white/5 overflow-hidden cursor-pointer group mb-4"
            onClick={() => handleImageClick(0)}
          >
            <CarImage
              src={auto.imagenes.principal}
              alt={auto.nombre}
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              fill
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="border border-white/30 bg-black/50 text-white px-6 py-3 font-mono text-xs tracking-widest">
                  VER EN GRANDE
                </div>
              </div>
            </div>
          </div>

          {/* Galería secundaria */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {auto.imagenes.galeria.map((imagen, index) => (
              <div 
                key={index}
                className="relative aspect-video bg-[#111] border border-white/5 overflow-hidden cursor-pointer group"
                onClick={() => handleImageClick(index + 1)}
              >
                <CarImage
                  src={imagen}
                  alt={`${auto.nombre} - Galería ${index + 1}`}
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  fill
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha: Información */}
        <div className="lg:col-span-5">
          <div className="font-mono text-[10px] tracking-[4px] text-neutral-400 mb-6">
            INFORMACIÓN
          </div>
          
          {/* Descripción */}
          <div className="mb-8">
            <div className="font-mono text-[10px] tracking-[4px] text-neutral-400 mb-4">
              SOBRE EL AUTO
            </div>
            <p className="text-white/60 text-lg leading-relaxed">
              {auto.descripcion}
            </p>
          </div>

          {/* Especificaciones */}
          <div>
            <div className="font-mono text-[10px] tracking-[4px] text-neutral-400 mb-6">
              ESPECIFICACIONES
            </div>
            <div className="space-y-3">
              {Object.entries(auto.especificaciones).map(([key, value]) => (
                <div key={key} className="bg-[#111] border border-white/5 p-4 flex justify-between items-center">
                  <div className="font-mono text-[10px] tracking-[2px] text-white/40">
                    {key.replace(/_/g, ' ').toUpperCase()}
                  </div>
                  <div className="text-white font-bold text-lg">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/60 hover:text-white font-mono text-sm tracking-widest"
            onClick={() => setSelectedImage(null)}
          >
            CERRAR
          </button>

          <button 
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl font-light"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
          >
            ←
          </button>

          <div className="relative max-w-6xl w-full aspect-video">
            <CarImage
              src={selectedImage}
              alt={`${auto.nombre} - Imagen ${currentGalleryIndex + 1}`}
              className="object-contain"
              fill
              priority
            />
          </div>

          <button 
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl font-light"
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
          >
            →
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs tracking-widest text-white/40">
            {currentGalleryIndex + 1} / {allImages.length}
          </div>
        </div>
      )}

      {/* Legacy Message */}
      <section className="py-24 px-4 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#808080] text-[clamp(0.75rem,1vw,0.9rem)] tracking-[0.3em] uppercase mb-6">
            TRANSMITIR LEGADO
          </div>
          <p className="text-[#A0A0A0] text-[clamp(1rem,1.5vw,1.2rem)] font-light tracking-wide leading-relaxed mb-8">
            Cada automóvil cuenta una historia. Cada historia merece ser preservada.
          </p>
          <div className="text-[#606060] text-[clamp(0.75rem,1vw,0.9rem)] tracking-[0.25em] uppercase">
            PASIÓN • CULTURA • AUTOMOTRIZ
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
