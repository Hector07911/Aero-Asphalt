'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Footer from '../../Componente/Footer';


const BRANDS = {
  bmw: {
    name: 'BMW',
    hero: {
      image: '/marcas/bmw/hero2.jpg',
      video: null,
      subtitle: 'Desde hace décadas, BMW transforma cada trayecto en una experiencia única.',
      statements: [
        'Precisión en cada curva.',
        'Equilibrio entre potencia y confort.',
        'La pasión por conducir.'
      ]
    },
    philosophy: {
      title: 'La filosofía del placer de conducir',
      text: 'BMW entiende que un automóvil debe ser más que un medio de transporte. Debe ser una extensión del conductor, una máquina que responda a cada input con precisión y emoción. La marca de Múnich ha perfeccionado el arte de crear vehículos que equilibran el rendimiento deportivo con la comodidad diaria, permitiendo que cada viaje, ya sea al trabajo o al circuito, sea una experiencia memorable. Esta filosofía se basa en la conexión directa entre piloto y máquina: una dirección comunicativa, un chasis equilibrado y un motor que responde con entusiasmo a cada solicitud de aceleración.'
    },
    history: [
      {
        year: '1916',
        title: 'El nacimiento de una leyenda',
        description: 'BMW (Bayerische Motoren Werke) se funda en Múnich, inicialmente como fabricante de motores de avión. La calidad y precisión de sus motores pronto ganan reputación, sentando las bases para la excelencia técnica que definiría a la marca.',
        image: null
      },
      {
        year: '1923',
        title: 'La primera motocicleta',
        description: 'BMW lanza la R32, su primera motocicleta. Con su motor bóxer de dos cilindros y transmisión por eje cardán, la R32 establece el estándar para las motocicletas BMW, una tradición que continúa hasta hoy.',
        image: null
      },
      {
        year: '1928',
        title: 'La entrada al mundo automotriz',
        description: 'BMW adquiere la fábrica Fahrzeugwerke Eisenach y comienza a producir automóviles. El Dixi 3/15 es el primer automóvil de BMW, marcando el inicio de su legado en cuatro ruedas.',
        image: null
      },
      {
        year: '1936',
        title: 'El 328: el primer deportivo',
        description: 'El BMW 328 revoluciona el mundo de los deportivos con su ligero chasis de tubular y motor de seis cilindros en línea. Con múltiples victorias en competición, el 328 establece a BMW como fabricante de vehículos deportivos de alto rendimiento.',
        image: null
      },
      {
        year: '1961',
        title: 'La Nueva Clase redefine el segmento',
        description: 'El BMW 1500 de la Nueva Clase establece el lenguaje de diseño y la filosofía de ingeniería que definiría a BMW por décadas: motor delantero, tracción trasera y un énfasis en la experiencia de conducción.',
        image: null
      },
      {
        year: '1972',
        title: 'El nacimiento de la división M',
        description: 'BMW Motorsport GmbH se funda para desarrollar vehículos de competición y versiones de alto rendimiento para calle. El M1, el primer automóvil desarrollado por la división M, se convierte en un icono de la ingeniería alemana.',
        image: null 
      },
      {
        year: '1986',
        title: 'El M3 E30: una leyenda nace',
        description: 'El BMW M3 E30 se lanza para homologar el modelo para competición DTM. Con su motor S14 de cuatro cilindros y 2.3 litros, el M3 E30 se convierte en uno de los autos de turismo más exitosos de la historia, consolidando el legado de la división M.',
        image: null
      },
      {
        year: '2000',
        title: 'La era dorada: M3 E46',
        description: 'El M3 E46 representa la cúspide de la filosofía purista de BMW M. Con el legendario motor S54 atmosférico de 3.2 litros y seis cilindros, el E46 establece nuevos estándares de rendimiento y se convierte en uno de los M3 más venerados de todos los tiempos.',
        image: null
      },
      {
        year: '2013',
        title: 'La electrificación: i8',
        description: 'BMW lanza el i8, un híbrido enchufable que demuestra que la marca abrazaba el futuro sin sacrificar su ADN deportivo. Con su diseño futurista y tecnología avanzada, el i8 establece un nuevo paradigma para los híbridos de alto rendimiento.',
        image: null
      },
      {
        year: '2020',
        title: 'La era digital: M4 G82',
        description: 'El M4 G82 representa la evolución digital de la división M. Con el motor S58 biturbo de 3.0 litros y tecnología de vanguardia, el G82 demuestra que BMW puede mantener su esencia deportiva mientras se adapta a la era moderna.',
        image: null
      }
    ],
    models: [
      {
        name: 'BMW M3 E30',
        year: '1986 — 1992',
        image: '/marcas/bmw/m3-e30.webp',
        why: 'No nació para ser un ícono de calle, sino para cumplir un requisito de homologación en el DTM. Pero terminó redefiniendo lo que significaba un auto deportivo accesible.',
        contribution: 'Estableció la fórmula que la división M seguiría por décadas: motor atmosférico de altas revoluciones, peso mínimo y una conexión directa entre piloto y máquina, sin electrónica de por medio.',
        iconStatus: 'Su carrocería ensanchada no era estética — cada línea, incluido el pilar C rediseñado, existía para dirigir el flujo de aire. Forma y función fusionadas sin concesiones.',
        influence: 'Todo M3 posterior se mide contra este original. Es la referencia que la propia BMW usa internamente al desarrollar cada nueva generación.'
      },
      {
        name: 'BMW M3 E46',
        year: '2000 — 2006',
        image: '/marcas/bmw/m3-e46.webp',
        why: 'Llegó en un momento en que los deportivos empezaban a depender de la electrónica. El E46 apostó por lo contrario: pureza mecánica total.',
        contribution: 'Perfeccionó el equilibrio entre uso diario y vocación de pista, demostrando que un M3 podía ser tan cómodo como brutal, sin que un aspecto sacrificara al otro.',
        iconStatus: 'Su motor de aspiración natural, capaz de girar hasta 8,000 RPM sin turbo, se convirtió en sinónimo de la era "pre-turbo" que muchos puristas siguen añorando.',
        influence: 'Marcó el techo de lo que un motor atmosférico podía lograr en la división M, justo antes de que la marca migrara hacia la sobrealimentación en generaciones posteriores.'
      },
      {
        name: 'BMW M4 G82',
        year: '2020 — Presente',
        image: '/marcas/bmw/m4-g82.webp',
        why: 'Debía probar que BMW M podía sobrevivir a la era digital sin perder su carácter, en un momento donde el mercado dudaba de los deportivos de combustión.',
        contribution: 'Introdujo la tracción integral M xDrive como opción, no como reemplazo — democratizando el rendimiento sin eliminar la esencia trasera de la marca.',
        iconStatus: 'Su parrilla vertical dividió opiniones desde el primer día, una decisión de diseño deliberadamente audaz que BMW defendió pese a la controversia inicial.',
        influence: 'Sentó las bases técnicas y de identidad visual que BMW M seguirá explorando en su transición hacia la electrificación.'
      }
    ],
    engineering: {
      title: 'Ingeniería de precisión alemana',
      text: 'La ingeniería de BMW se basa en una búsqueda obsesiva del equilibrio perfecto. Cada componente está diseñado para trabajar en armonía, creando una experiencia de conducción que conecta al piloto con la máquina. Esta filosofía se manifiesta en el reparto de pesos 50:50, que proporciona un equilibrio ideal entre las ruedas delanteras y traseras, y en el énfasis en la tracción trasera, que ofrece una dinámica de conducción pura y comunicativa. BMW ha perfeccionado el arte de crear vehículos que son igualmente capaces en el circuito como en la carretera, sin comprometer ninguno de los dos aspectos.',
      components: [
        {
          title: 'Motor de seis cilindros en línea',
          description: 'El seis cilindros en línea es el corazón de BMW desde hace décadas. Su configuración perfectamente equilibrada elimina vibraciones secundarias, permitiendo una operación suave y refinada mientras entrega un torque lineal y una respuesta entusiasta.',
          image: '/marcas/bmw/engine.webp'
        },
        {
          title: 'Reparto de pesos 50:50',
          description: 'El equilibrio perfecto entre los ejes delantero y trasero es una firma de BMW. Este reparto optimiza la tracción, el frenado y la agilidad, permitiendo que el vehículo responda de manera predecible y precisa a los inputs del conductor.',
          image: '/marcas/bmw/m4-g82.webp'
        },
        {
          title: 'Chasis de alta rigidez',
          description: 'El chasis de BMW está diseñado para ser excepcionalmente rígido, lo que mejora la precisión de la dirección y la respuesta del chasis, mediante acero de alta resistencia, aluminio y, en modelos M, fibra de carbono (CFRP).',
          image: '/marcas/bmw/chasis.jpg'
        },
        {
          title: 'Sistema M xDrive',
          description: 'El sistema de tracción integral M xDrive es capaz de enviar hasta el 100% del par al eje trasero cuando las condiciones lo permiten, ofreciendo la tracción de un AWD con la dinámica de un RWD.',
          image: '/marcas/bmw/m4-g82.webp'
        },
        {
          title: 'Transmisión M Steptronic',
          description: 'La transmisión automática M Steptronic de 8 velocidades ofrece cambios en milisegundos y una capacidad de aprendizaje que se adapta al estilo de conducción del piloto.',
          image: '/marcas/bmw/transmission.jpg'
        },
        {
          title: 'Sistema de escape M',
          description: 'El sistema de escape M con válvulas de mariposa controladas electrónicamente optimiza el flujo de gases: se abren en régimen alto para maximizar potencia y sonido, y se cierran en bajo régimen para mejorar el confort.',
          image: '/marcas/bmw-m4/img-second-3.webp'
        }
      ]
    },
    design: {
      title: 'El lenguaje de la doble parrilla',
      text: 'El diseño de BMW es un estudio en evolución controlada. Desde la parrilla de riñones horizontales de los modelos clásicos hasta las verticales de los M modernos, cada generación ha mantenido los elementos fundamentales que hacen reconocible a un BMW: faros dobles, perfil bajo y una postura atlética pero elegante. Lo extraordinario no es que BMW haya mantenido estos elementos, sino que los haya reinterpretado constantemente para seguir siendo contemporáneos sin perder su identidad.',
      gallery: [
        { title: 'Parrilla de riñones icónica', image: '/marcas/bmw/ParrillaIconica.webp' },
        { title: 'Faros dobles angulares', image: '/marcas/bmw/faros.webp' },
        { title: 'Perfil Hofmeister kink', image: '/marcas/bmw/hofmeister.webp' },
        { title: 'Interior orientado al conductor', image: '/marcas/bmw/m4-interior.webp' },
        { title: 'Líneas de superficie tensas', image: '/marcas/bmw/m4-g82.webp' },
        { title: 'Postura muscular y elegante', image: '/marcas/bmw/perfil.webp' }
      ]
    },

    dna: [
      'Precisión',
      'Motorsport',
      'Inline-Six',
      '50:50',
      'Driver Focus',
      'RWD'
    ],
    specs: {
      founded: '1916',
      country: 'Alemania',
      headquarters: 'Múnich',
      founder: 'Franz Josef Popp, Karl Rapp, Camillo Castiglioni',
      performanceDivision: 'BMW M GmbH',
      iconicEngine: 'Seis cilindros en línea',
      iconicModel: 'M3'
    },
    quote: {
      text: 'No fabricamos automóviles. Creamos experiencias.',
      author: 'BMW'
    },
    articles: [
      { title: '¿Cómo nació la división M?', category: 'HISTORIA', image: '/marcas/bmw/M.jpg', slug: 'division-m' },
      { title: 'De un videojuego a la realidad: La leyenda del M3 GTR de NFS', category: 'LEYENDAS', image: '/marcas/bmw/m3Gtr.jpg', slug: 'm3-e30' },
      { title: 'La evolución del seis cilindros en línea', category: 'INGENIERÍA', image: '/marcas/bmw/motor6.jpg', slug: 'inline-6' }
    ],
    relatedBrands: ['porsche', 'audi', 'mercedes-amg']
  },

  porsche: {
    name: 'Porsche',
    hero: {
      image: '/marcas/porsche/porsche.webp',
      video: null,
      subtitle: '',
      statements: []
    },
    philosophy: {
      title: '',
      text: ''
    },
    history: [],
    models: [],
    engineering: {
      title: '',
      text: '',
      components: []
    },
    design: {
      title: '',
      text: '',
      gallery: []
    },
    dna: ['', '', '', '', '', ''],
    specs: {
      founded: '',
      country: '',
      headquarters: '',
      founder: '',
      performanceDivision: '',
      iconicEngine: '',
      iconicModel: ''
    },
    quote: {
      text: '',
      author: ''
    },
    articles: [],
    relatedBrands: []
  },

  ferrari: {
    name: 'Ferrari',
    hero: {
      image: '',
      video: null,
      subtitle: '',
      statements: []
    },
    philosophy: {
      title: '',
      text: ''
    },
    history: [],
    models: [],
    engineering: {
      title: '',
      text: '',
      components: []
    },
    design: {
      title: '',
      text: '',
      gallery: []
    },
    dna: ['', '', '', '', '', ''],
    specs: {
      founded: '',
      country: '',
      headquarters: '',
      founder: '',
      performanceDivision: '',
      iconicEngine: '',
      iconicModel: ''
    },
    quote: {
      text: '',
      author: ''
    },
    articles: [],
    relatedBrands: []
  },

  lamborghini: {
    name: 'Lamborghini',
    hero: {
      image: '',
      video: null,
      subtitle: '',
      statements: []
    },
    philosophy: {
      title: '',
      text: ''
    },
    history: [],
    models: [],
    engineering: {
      title: '',
      text: '',
      components: []
    },
    design: {
      title: '',
      text: '',
      gallery: []
    },
    dna: ['', '', '', '', '', ''],
    specs: {
      founded: '',
      country: '',
      headquarters: '',
      founder: '',
      performanceDivision: '',
      iconicEngine: '',
      iconicModel: ''
    },
    quote: {
      text: '',
      author: ''
    },
    articles: [],
    relatedBrands: []
  },

  pagani: {
    name: 'Pagani',
    hero: {
      image: '',
      video: null,
      subtitle: '',
      statements: []
    },
    philosophy: {
      title: '',
      text: ''
    },
    history: [],
    models: [],
    engineering: {
      title: '',
      text: '',
      components: []
    },
    design: {
      title: '',
      text: '',
      gallery: []
    },
    dna: ['', '', '', '', '', ''],
    specs: {
      founded: '',
      country: '',
      headquarters: '',
      founder: '',
      performanceDivision: '',
      iconicEngine: '',
      iconicModel: ''
    },
    quote: {
      text: '',
      author: ''
    },
    articles: [],
    relatedBrands: []
  },

  mclaren: {
    name: 'McLaren',
    hero: {
      image: '',
      video: null,
      subtitle: '',
      statements: []
    },
    philosophy: {
      title: '',
      text: ''
    },
    history: [],
    models: [],
    engineering: {
      title: '',
      text: '',
      components: []
    },
    design: {
      title: '',
      text: '',
      gallery: []
    },
    dna: ['', '', '', '', '', ''],
    specs: {
      founded: '',
      country: '',
      headquarters: '',
      founder: '',
      performanceDivision: '',
      iconicEngine: '',
      iconicModel: ''
    },
    quote: {
      text: '',
      author: ''
    },
    articles: [],
    relatedBrands: []
  },

  audi: {
    name: 'Audi',
    hero: {
      image: '',
      video: null,
      subtitle: '',
      statements: []
    },
    philosophy: {
      title: '',
      text: ''
    },
    history: [],
    models: [],
    engineering: {
      title: '',
      text: '',
      components: []
    },
    design: {
      title: '',
      text: '',
      gallery: []
    },
    dna: ['', '', '', '', '', ''],
    specs: {
      founded: '',
      country: '',
      headquarters: '',
      founder: '',
      performanceDivision: '',
      iconicEngine: '',
      iconicModel: ''
    },
    quote: {
      text: '',
      author: ''
    },
    articles: [],
    relatedBrands: []
  },

  'aston-martin': {
    name: 'Aston Martin',
    hero: {
      image: '',
      video: null,
      subtitle: '',
      statements: []
    },
    philosophy: {
      title: '',
      text: ''
    },
    history: [],
    models: [],
    engineering: {
      title: '',
      text: '',
      components: []
    },
    design: {
      title: '',
      text: '',
      gallery: []
    },
    dna: ['', '', '', '', '', ''],
    specs: {
      founded: '',
      country: '',
      headquarters: '',
      founder: '',
      performanceDivision: '',
      iconicEngine: '',
      iconicModel: ''
    },
    quote: {
      text: '',
      author: ''
    },
    articles: [],
    relatedBrands: []
  },

  mazda: {
    name: 'Mazda',
    hero: {
      image: '',
      video: null,
      subtitle: '',
      statements: []
    },
    philosophy: {
      title: '',
      text: ''
    },
    history: [],
    models: [],
    engineering: {
      title: '',
      text: '',
      components: []
    },
    design: {
      title: '',
      text: '',
      gallery: []
    },
    dna: ['', '', '', '', '', ''],
    specs: {
      founded: '',
      country: '',
      headquarters: '',
      founder: '',
      performanceDivision: '',
      iconicEngine: '',
      iconicModel: ''
    },
    quote: {
      text: '',
      author: ''
    },
    articles: [],
    relatedBrands: []
  },

  nissan: {
    name: 'Nissan',
    hero: {
      image: '',
      video: null,
      subtitle: '',
      statements: []
    },
    philosophy: {
      title: '',
      text: ''
    },
    history: [],
    models: [],
    engineering: {
      title: '',
      text: '',
      components: []
    },
    design: {
      title: '',
      text: '',
      gallery: []
    },
    dna: ['', '', '', '', '', ''],
    specs: {
      founded: '',
      country: '',
      headquarters: '',
      founder: '',
      performanceDivision: '',
      iconicEngine: '',
      iconicModel: ''
    },
    quote: {
      text: '',
      author: ''
    },
    articles: [],
    relatedBrands: []
  },

  'rolls-royce': {
    name: 'Rolls Royce',
    hero: {
      image: '',
      video: null,
      subtitle: '',
      statements: []
    },
    philosophy: {
      title: '',
      text: ''
    },
    history: [],
    models: [],
    engineering: {
      title: '',
      text: '',
      components: []
    },
    design: {
      title: '',
      text: '',
      gallery: []
    },
    dna: ['', '', '', '', '', ''],
    specs: {
      founded: '',
      country: '',
      headquarters: '',
      founder: '',
      performanceDivision: '',
      iconicEngine: '',
      iconicModel: ''
    },
    quote: {
      text: '',
      author: ''
    },
    articles: [],
    relatedBrands: []
  }
};

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function SafeImage({ src, alt, className, fill, sizes, priority, loading }) {
  if (!src) {
    return (
      <div className={`${className} bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center`}>
        <span className="text-[#B8963E]/30 text-xs tracking-widest uppercase">Sin imagen</span>
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      priority={priority}
      loading={loading}
      unoptimized
      className={className}
    />
  );
}

function PullQuote({ children, author }) {
  return (
    <blockquote className="my-16 border-l-2 border-[#B8963E] pl-8 py-2">
      <p className="text-white text-[clamp(22px,3vw,32px)] font-light italic leading-snug tracking-tight">
        {children}
      </p>
      {author && (
        <cite className="block mt-4 text-[#B8963E] text-xs tracking-[3px] uppercase font-mono not-italic">
          — {author}
        </cite>
      )}
    </blockquote>
  );
}

// ─────────────────────────────────────────────
// Componente: ficha editorial de cada modelo icónico
// ─────────────────────────────────────────────
function ModelFeature({ model, index }) {
  const [ref, visible] = useReveal();
  const reversed = index % 2 === 1;

  const blocks = [
    { label: 'Por qué importó', text: model.why },
    { label: 'Su aporte', text: model.contribution },
    { label: 'Qué lo hizo ícono', text: model.iconStatus },
    { label: 'Su influencia', text: model.influence }
  ];

  return (
    <div ref={ref} className="relative">
      <span className="absolute -top-10 left-0 text-[clamp(80px,10vw,160px)] font-bold text-white/[0.03] leading-none select-none pointer-events-none">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div
          className={`lg:col-span-7 relative aspect-[4/3] overflow-hidden reveal-scale ${
            reversed ? 'lg:order-2' : ''
          } ${visible ? 'is-visible' : ''}`}
        >
          <SafeImage
            src={model.image}
            alt={model.name}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <h3 className="text-white text-[clamp(28px,3.5vw,44px)] font-bold tracking-tight">
              {model.name}
            </h3>
            <p className="text-[#B8963E] text-sm tracking-[3px] uppercase font-mono mt-2">
              {model.year}
            </p>
          </div>
        </div>

        <div className={`lg:col-span-5 space-y-8 ${reversed ? 'lg:order-1' : ''}`}>
          {blocks.map((block, i) => (
            <div
              key={i}
              className={`reveal-fade-x ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: visible ? `${i * 150 + 200}ms` : '0ms' }}
            >
              <div className="text-[#B8963E] text-[10px] tracking-[4px] uppercase font-mono mb-2">
                {block.label}
              </div>
              <p className="text-[#A0A0A0] text-base font-light leading-relaxed tracking-wide">
                {block.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MarcaDetail() {
  const params = useParams();
  const brand = BRANDS[params.slug];

  if (!brand) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-center">
          <div className="text-[10px] tracking-[6px] text-[#B8963E] font-mono mb-6">// 404</div>
          <h1 className="text-white text-5xl font-bold tracking-tight mb-6">Marca no encontrada</h1>
          <Link href="/marcas" className="text-[#B8963E] text-sm tracking-widest uppercase hover:text-[#B8963E]/80 transition-colors">
            Volver a marcas →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">

      {/* HERO — reveal cinemático estilo GTA VI */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {brand.hero.video ? (
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src={brand.hero.video} type="video/mp4" />
            </video>
          ) : (
            <div className="absolute inset-0 animate-hero-zoom">
              <SafeImage
                src={brand.hero.image}
                alt={`${brand.name} hero`}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        </div>

        <Link
          href="/marcas"
          className="absolute top-12 left-4 md:left-12 lg:left-20 text-[#B8963E] text-xs tracking-[4px] uppercase hover:text-[#B8963E]/70 transition-colors font-mono z-10"
        >
          ← Volver a marcas
        </Link>

        <div className="relative h-full flex flex-col justify-end pb-24 px-4 md:px-12 lg:px-20">
          <div className="overflow-hidden">
            <h1 className="text-white text-[clamp(64px,12vw,140px)] font-bold tracking-tighter leading-none animate-hero-title">
              {brand.name}
            </h1>
          </div>

          <div className="overflow-hidden mt-6 max-w-2xl">
            <p className="text-[#A0A0A0] text-[clamp(18px,2.2vw,26px)] font-light tracking-wide animate-hero-subtitle">
              {brand.hero.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 mt-10 animate-hero-statements">
            {brand.hero.statements.map((statement, index) => (
              <span key={index} className="text-[#B8963E] text-xs tracking-[3px] uppercase font-mono">
                {statement}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#B8963E]/60 to-transparent animate-scroll-hint" />
      </section>

      {/* FILOSOFÍA */}
      {brand.philosophy.text && (
        <section className="py-32 px-4 md:px-12 lg:px-20 bg-[#050505]">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-[#B8963E] text-sm tracking-[6px] uppercase font-mono mb-4">// FILOSOFÍA</h2>
              <div className="w-16 h-px bg-[#B8963E] mx-auto" />
            </div>
            <h3 className="text-white text-[clamp(28px,4vw,44px)] font-bold tracking-tight mb-8">
              {brand.philosophy.title}
            </h3>
            <p className="text-[#A0A0A0] text-[clamp(16px,2vw,20px)] font-light leading-relaxed tracking-wide">
              {brand.philosophy.text}
            </p>
          </div>
        </section>
      )}

      {/* HISTORIA — timeline editorial con imágenes tipo archivo */}
      {brand.history.length > 0 && (
        <section className="py-32 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <h2 className="text-[#B8963E] text-sm tracking-[6px] uppercase font-mono mb-4">// HISTORIA</h2>
              <div className="w-16 h-px bg-[#B8963E]" />
            </div>

            <div className="space-y-32">
              {brand.history.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 ${item.image && typeof item.image === 'string' && item.image.length > 0 ? 'lg:grid-cols-12' : ''} gap-8 items-center`}
                >
                  {item.image && typeof item.image === 'string' && item.image.length > 0 && (
                    <div className={`lg:col-span-5 relative aspect-[4/3] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <SafeImage
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className={item.image && typeof item.image === 'string' && item.image.length > 0 ? `lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}` : ''}>
                    <div className="text-[#B8963E] text-[clamp(40px,6vw,72px)] font-bold tracking-tighter font-mono mb-2 opacity-40">
                      {item.year}
                    </div>
                    <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-4">
                      {item.title}
                    </h3>
                    <p className="text-[#A0A0A0] text-base font-light leading-relaxed tracking-wide max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AUTOMÓVILES QUE DEFINIERON LA MARCA */}
      {brand.models.length > 0 && (
        <section className="py-32 px-4 md:px-12 lg:px-20 bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-[#B8963E] text-sm tracking-[6px] uppercase font-mono mb-4">
                // AUTOMÓVILES QUE DEFINIERON LA MARCA
              </h2>
              <div className="w-16 h-px bg-[#B8963E]" />
            </div>

            <div className="space-y-40">
              {brand.models.map((model, index) => (
                <ModelFeature key={index} model={model} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INGENIERÍA */}
      <section className="py-32 px-4 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-[#B8963E] text-sm tracking-[6px] uppercase font-mono mb-4">// INGENIERÍA</h2>
            <div className="w-16 h-px bg-[#B8963E]" />
          </div>

          <div className="max-w-3xl mb-24">
            <h3 className="text-white text-[clamp(28px,4vw,40px)] font-bold tracking-tight mb-6">
              {brand.engineering.title}
            </h3>
            <p className="text-[#A0A0A0] text-lg font-light leading-relaxed tracking-wide">
              {brand.engineering.text}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {brand.engineering.components.map((component, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <SafeImage
                    src={component.image}
                    alt={component.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-white text-base font-bold tracking-wide uppercase mb-2 group-hover:text-[#B8963E] transition-colors duration-500">
                  {component.title}
                </h4>
                <p className="text-[#606060] text-sm font-light leading-relaxed">
                  {component.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISEÑO */}
      {brand.design.text && (
        <section className="py-32 px-4 md:px-12 lg:px-20 bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-[#B8963E] text-sm tracking-[6px] uppercase font-mono mb-4">// DISEÑO</h2>
              <div className="w-16 h-px bg-[#B8963E]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              <div className="flex flex-col justify-center">
                <h3 className="text-white text-[clamp(28px,4vw,40px)] font-bold tracking-tight mb-6">
                  {brand.design.title}
                </h3>
                <p className="text-[#A0A0A0] text-lg font-light leading-relaxed tracking-wide">
                  {brand.design.text}
                </p>
              </div>
            </div>

            {brand.design.gallery.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {brand.design.gallery.map((item, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden group">
                    <SafeImage
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500 flex items-end p-4">
                      <span className="text-white text-xs tracking-widest uppercase font-mono">
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* DNA + FICHA TÉCNICA */}
      {(brand.dna.some(Boolean) || Object.values(brand.specs).some(Boolean)) && (
        <section className="py-32 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

            {brand.dna.some(Boolean) && (
              <div>
                <h2 className="text-[#B8963E] text-sm tracking-[6px] uppercase font-mono mb-8">// ADN</h2>
                <div className="flex flex-wrap gap-3">
                  {brand.dna.filter(Boolean).map((trait, index) => (
                    <span
                      key={index}
                      className="px-5 py-2 border border-[#B8963E]/30 text-[#B8963E] text-sm tracking-widest uppercase"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {Object.values(brand.specs).some(Boolean) && (
              <div>
                <h2 className="text-[#B8963E] text-sm tracking-[6px] uppercase font-mono mb-8">// FICHA TÉCNICA</h2>
                <dl className="space-y-4">
                  {Object.entries(brand.specs).map(([key, value]) =>
                    value ? (
                      <div key={key} className="flex justify-between border-b border-white/10 pb-2">
                        <dt className="text-[#606060] text-sm uppercase tracking-wider">{key}</dt>
                        <dd className="text-white text-sm font-light text-right">{value}</dd>
                      </div>
                    ) : null
                  )}
                </dl>
              </div>
            )}
          </div>
        </section>
      )}

      {/* QUOTE */}
      {brand.quote.text && (
        <section className="py-32 px-4 md:px-12 lg:px-20 bg-[#050505]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white text-[clamp(24px,4vw,40px)] font-light italic tracking-tight mb-6">
              "{brand.quote.text}"
            </p>
            <span className="text-[#B8963E] text-sm tracking-[4px] uppercase font-mono">
              — {brand.quote.author}
            </span>
          </div>
        </section>
      )}

      {/* ARTÍCULOS RELACIONADOS */}
      <section className="py-32 px-4 md:px-12 lg:px-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-[#B8963E] text-sm tracking-[6px] uppercase font-mono mb-4">// ARTÍCULOS RELACIONADOS</h2>
            <div className="w-16 h-px bg-[#B8963E]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brand.articles.map((article, index) => (
              <Link key={index} href={`/articulos/${article.slug}`} className="group">
                <div className="relative aspect-[16/9] mb-6 overflow-hidden">
                  <SafeImage
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className="text-[#B8963E] text-xs tracking-[4px] uppercase font-mono mb-3">
                  {article.category}
                </div>

                <h3 className="text-white text-lg font-bold tracking-wide mb-4 group-hover:text-[#B8963E] transition-colors duration-500 ease-out">
                  {article.title}
                </h3>

                <div className="text-[#B8963E] text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform translate-y-4 group-hover:translate-y-0">
                  Leer más →
                </div>
              </Link>
            ))}

            <Link href="/marcas" className="text-[#B8963E] text-lg tracking-widest uppercase hover:text-[#B8963E]/80 transition-colors">
              Explorar otra marca →
            </Link>
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
            Cada marca cuenta una historia. Cada historia merece ser preservada.
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
