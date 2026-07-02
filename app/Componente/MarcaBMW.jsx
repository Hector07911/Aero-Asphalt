'use client';

export default function MarcaBMW() {
  return (
    <section className="w-full bg-black py-16 px-4 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Contenedor principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Imagen principal con texto - ocupa 8 columnas en desktop */}
          <div className="lg:col-span-8">
            <div className="relative">
              <img 
                src="/marcas/bmw-m4/img-principal.png" 
                alt="BMW M4 G82" 
                className="w-full h-auto object-cover"
              />
              {/* Texto superpuesto en la imagen */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                <h2 className="text-[#CBCBCB] text-2xl md:text-3xl font-bold tracking-widest mb-2">
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
            <img 
              src="/marcas/bmw-m4/img-second.jpg" 
              alt="BMW M4 detalle" 
              className="w-full h-48 object-cover"
            />
            <img 
              src="/marcas/bmw-m4/img-second-2.png" 
              alt="BMW M4 interior" 
              className="w-full h-48 object-cover"
            />
            <img 
              src="/marcas/bmw-m4/img-second-3.png" 
              alt="BMW M4 motor" 
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
