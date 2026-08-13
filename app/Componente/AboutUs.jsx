import Link from 'next/link';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <>
      {/* Imagen final con degradados */}
      <section className="w-full bg-black relative aspect-[16/9] md:aspect-[21/9]">
        <Image 
          src="/img-final.webp" 
          alt="Final image" 
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
        />
        
        {/* Degradado superior - hacia negro puro */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/60 to-transparent"></div>
        
        {/* Degradado inferior - hacia negro puro */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      </section>

      {/* Sección Quiénes Somos */}
      <section className="w-full bg-black py-20 px-4 md:px-12 lg:px-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-white text-sm tracking-[4px] uppercase mb-4 font-bold">
            Quiénes Somos
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-6">
           es un espacio dedicado a la cultura automotriz, donde cada automóvil es apreciado por la historia que representa, la ingeniería que lo hace posible, el diseño que lo convierte en una obra de arte y la pasión que despierta en quienes lo contemplan. No importa la marca, el año o el precio; lo que importa es la emoción que transmite. Cada auto cuenta una historia, y nosotros estamos aquí para contarla.
          </p>
        </div>
      </section>
    </>
  );
}
