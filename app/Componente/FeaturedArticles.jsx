'use client';

export default function FeaturedArticles() {
  return (
    <section className="w-full bg-black py-16 px-4">
      <div className="mx-auto max-w-6xl">
        
        {/* Línea divisoria */}
        <div className="w-full h-px bg-white/10 mb-10"></div>

        {/* Separador */}
        <div className="text-center mb-10">
          <div className="text-neutral-500 text-xs tracking-[5px] uppercase font-mono">
            Artículos Destacados
          </div>
        </div>

        {/* Grid de 3 artículos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Artículo 1 - Clásicos */}
          <div className="border border-white/10 bg-[#0e0e0e] overflow-hidden">
            <div className="bg-[#1a1a1a] flex items-center justify-center h-48">
              <div><img src="/motor-v12.jpg" alt="Motor v12" className="w-full h-full object-cover" /></div>
            </div>
            <div className="p-6">
              <div className="text-[#c5c5c3] text-xs tracking-[3px] mb-3 font-mono">
                EL RENACER DEL V12
              </div>
              <h3 className="text-white text-lg font-bold tracking-wide leading-snug">
                Por qué sigue emcionadondo en plena era eléctrica?
              </h3>
            </div>
          </div>

          {/* Artículo 2 - Concept */}
          <div className="border border-white/10 bg-[#0e0e0e] overflow-hidden">
            <div className="bg-[#1a1a1a] flex items-center justify-center h-48">
              <div><img src="/porsche911.jpg" alt="Porsche 911" className="w-full h-full object-cover" /></div>
            </div>
            <div className="p-6">
              <div className="text-[#c5c5c3] text-xs tracking-[3px] mb-3 font-mono">
                LA SILUETA PERFECTA 
              </div>
              <h3 className="text-white text-lg font-bold tracking-wide leading-snug">
                Cómo el Porsche 911 ha mantenido su esencia durante más de 60 años.
              </h3>
            </div>
          </div>

          {/* Artículo 3 - Cultura */}
          <div className="border border-white/10 bg-[#0e0e0e] overflow-hidden">
            <div className="bg-[#1a1a1a] flex items-center justify-center h-48">
              <div><img src="/arte.jpg" alt="Arte" className="w-full h-full object-cover" /></div>
            </div>
            <div className="p-6">
              <div className="text-[#c5c5c3] text-xs tracking-[3px] mb-3 font-mono">
                MÁS QUE VELOCIDAD
              </div>
              <h3 className="text-white text-lg font-bold tracking-wide leading-snug">
                Qué hace que un automóvil se convierta en leyenda.
              </h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
