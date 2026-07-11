'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const ARTICLES = {
  'renacer-del-v12': {
    title: 'El Renacer del V12',
    subtitle: '¿Por qué sigue emocionándonos en plena era eléctrica?',
    image: '/v12.webp',
    category: 'INGENIERÍA',
    readTime: '8 MIN',
    year: '2024',
    content: [
      { type: 'paragraph', text: 'Hay motores que simplemente impulsan un automóvil. Y hay otros que despiertan emociones desde el primer instante en que cobran vida.' },
      { type: 'paragraph', text: 'El V12 pertenece a esa segunda categoría.' },
      { type: 'paragraph', text: 'Durante décadas, esta configuración se convirtió en el corazón de algunas de las máquinas más admiradas del mundo. No solo por su potencia, sino por la manera en la que entregaba cada aceleración, por la suavidad de su funcionamiento y por un sonido capaz de poner la piel de gallina incluso antes de comenzar a conducir.' },
      { type: 'paragraph', text: 'Hoy, mientras la industria avanza hacia la electrificación y nuevas formas de movilidad, el V12 continúa ocupando un lugar especial en la memoria de quienes entienden que un automóvil puede ser mucho más que un medio de transporte.' },
      { type: 'heading', text: 'Una obra de ingeniería', level: 2 },
      { type: 'image', src: '/v12-2.webp', alt: 'Motor V12', caption: 'Configuración V12 — Doce cilindros en perfecta armonía' },
      { type: 'paragraph', text: 'Un motor V12 está formado por doce cilindros distribuidos en dos bancadas de seis, creando una configuración en forma de "V". Esta arquitectura permite un equilibrio mecánico excepcional, reduciendo vibraciones y ofreciendo una entrega de potencia extremadamente suave y progresiva.' },
      { type: 'paragraph', text: 'Más que una búsqueda de velocidad, el V12 representa una filosofía de ingeniería donde cada componente trabaja en perfecta armonía para ofrecer una experiencia refinada y emocionante.' },
      { type: 'heading', text: 'Más allá de la potencia', level: 2 },
      { type: 'paragraph', text: 'Hablar de un V12 no significa hablar únicamente de cifras. Su verdadero encanto reside en las sensaciones.' },
      { type: 'paragraph', text: 'La respuesta del acelerador, el sonido que acompaña cada cambio de revoluciones y la forma en la que entrega la potencia convierten cada recorrido en una experiencia difícil de olvidar.' },
      { type: 'heading', text: 'Los automóviles que hicieron historia', level: 2 },
      { type: 'image', src: '/v12-3.webp', alt: 'Línea de tiempo V12', caption: 'De la F50 al DBS — Una línea de tiempo de leyendas' },
      {
        type: 'list',
        items: [
          { title: 'Ferrari F50', description: 'Inspirado directamente en la Fórmula 1, llevó la competición a las calles como pocos automóviles han conseguido.' },
          { title: 'Lamborghini Diablo', description: 'El superdeportivo que marcó toda una generación gracias a su diseño atrevido y su imponente motor V12.' },
          { title: 'Pagani Zonda', description: 'Una combinación perfecta entre arte, fibra de carbono e ingeniería de precisión.' },
          { title: 'Ferrari 812 Superfast', description: 'La demostración de que un V12 atmosférico todavía podía emocionar en pleno siglo XXI.' },
          { title: 'Aston Martin DBS', description: 'Elegancia británica impulsada por una de las configuraciones mecánicas más refinadas jamás construidas.' }
        ]
      },
      { type: 'heading', text: 'Un sonido imposible de reemplazar', level: 2 },
      { type: 'image', src: '/v12-lambo.webp', alt: 'Sonido V12', caption: 'La firma sonora del V12 — Una melodía mecánica inconfundible' },
      { type: 'paragraph', text: 'Cada motor tiene personalidad. Pero pocos poseen una identidad tan reconocible como un V12. Su sonido cambia con las revoluciones, pasando de un funcionamiento refinado a una melodía mecánica que ha acompañado algunos de los deportivos más icónicos de la historia.' },
      { type: 'heading', text: 'Un futuro cada vez más exclusivo', level: 2 },
      { type: 'paragraph', text: 'Las normativas medioambientales, la electrificación y el desarrollo de nuevas tecnologías han reducido progresivamente la presencia de los motores V12. Hoy sobreviven únicamente en modelos muy exclusivos, convirtiéndose en una de las últimas expresiones de una ingeniería que marcó una época.' },
      { type: 'paragraph', text: 'Quizá su tiempo en las líneas de producción esté llegando a su fin. Pero su legado difícilmente desaparecerá.' },
      { type: 'heading', text: 'Más que un motor', level: 2 },
      { type: 'paragraph', text: 'El V12 nunca fue únicamente una configuración mecánica. Representa una época en la que la ingeniería buscaba emocionar tanto como impresionar.' },
      { type: 'paragraph', text: 'Porque las cifras pueden quedar atrás.', highlight: true },
      { type: 'paragraph', text: 'Las emociones permanecen.', highlight: true }
    ]
  },
  'silueta-perfecta': {
    title: 'La Silueta Perfecta',
    subtitle: '¿Cómo el Porsche 911 ha mantenido su esencia durante más de 60 años?',
    image: '/porsche911.webp',
    category: 'DISEÑO',
    readTime: '6 MIN',
    year: '2024',
    content: [
      { type: 'paragraph', text: 'Hay diseños que envejecen con el tiempo. Y hay otros que parecen desafiar las leyes de la moda.' },
      { type: 'paragraph', text: 'El Porsche 911 es uno de ellos.' },
      { type: 'paragraph', text: 'Desde su presentación en 1963, ha evolucionado generación tras generación sin perder aquello que lo hace inconfundible. Basta una simple silueta para reconocerlo, incluso antes de ver su emblema.' },
      { type: 'paragraph', text: 'Pocas máquinas pueden presumir de haber cambiado tanto sin dejar de ser ellas mismas.' },
      { type: 'heading', text: 'El origen de una leyenda', level: 2 },
      { type: 'image', src: '/primerPorsche911.webp', alt: 'Porsche 911 original', caption: 'El 911 original de 1963 — Una silueta que definiría una era' },
      { type: 'paragraph', text: 'El 911 nació como el sucesor del 356, pero Ferry Porsche quería algo más que un simple reemplazo. Quería crear un deportivo que pudiera competir con los mejores de su época sin perder la esencia de la marca.' },
      { type: 'paragraph', text: 'El resultado fue un diseño revolucionario: motor trasero, perfil bajo, faros redondos y esa característica línea de techo que se inclina hacia la parte trasera.' },
      { type: 'heading', text: 'Mientras otros deportivos cambiaban radicalmente con cada nueva generación, Porsche tomó una decisión diferente.' },
      { type: 'paragraph', text: 'En lugar de reinventarlo, decidió perfeccionarlo.' },
      { type: 'paragraph', text: 'Cada nueva versión incorporó avances tecnológicos, mejoras aerodinámicas y motores más eficientes, pero siempre respetando las proporciones que hicieron del 911 un icono.' },
      {
        type: 'list',
        items: [
          { title: 'Proporciones perfectas', description: 'Su techo con caída suave, los guardabarros delanteros elevados, los faros redondos y su característica zaga forman una identidad visual que ha sobrevivido a generaciones enteras.' },
          { title: 'ADN inquebrantable', description: 'No importa si observamos un modelo clásico de los años sesenta o un moderno GT3 RS. Ambos comparten el mismo ADN..' },
          { title: 'Reconocibilidad instantánea', description: 'Desde cualquier ángulo, un 911 es inconfundible. Esa identidad visual es parte de su valor atemporal.' }
        ]
      },
        { type: 'heading', text: 'Ingeniería Esculpida por el Viento', level: 2 },
        { type: 'paragraph', text: 'El Porsche 911 ha evolucionado demostrando que un coche rápido nace de la armonía perfecta entre diseño e ingeniería. Su silueta icónica de gota de agua no se ha perdido; se ha ensanchado milimétricamente para albergar neumáticos de mayor sección y vías más anchas, otorgándole un agarre lateral masivo en las curvas.' },
        { type: 'paragraph', text: 'Su capacidad para combinar el uso diario con un rendimiento extraordinario en circuito lo ha convertido en uno de los deportivos más completos jamás construidos.' },
        { type: 'paragraph', text: 'Las curvas favorecen la aerodinámica mediante soluciones visuales funcionales: aberturas en el capó y rejillas de ventilación sobre las aletas delanteras que alivian la presión del aire atrapado en las ruedas, reduciendo la fuerza de elevación del morro.' },
        { type: 'image', src: '/PorscheGT3.webp', alt: 'Evolucionar sin olvidar el origen', caption: 'El Porsche 911 — Un legado que sigue evolucionando sin perder su personalidad' },
        { type: 'paragraph', text: 'El protagonismo final se lo lleva su alerón trasero activo de cuello de cisne y el fondo plano del chasis. Juntos, canalizan el viento para empujar el coche contra el asfalto en los circuitos, transformando la resistencia del aire en pura estabilidad sin romper la mítica línea del techo nacida en 1963.' },
        { type: 'heading', text: 'Optimización de Pista e Integración de Materiales', level: 3 },
        { type: 'paragraph', text: 'Bajo esa carrocería ensanchada se esconde un chasis de competición controlable desde el puesto de conducción. El volante integra selectores giratorios analógicos que permiten al piloto ajustar la amortiguación en extensión y compresión, el diferencial trasero y el control de tracción en tiempo real, adaptando el coche a cada curva del circuito.' },
        { type: 'paragraph', text: 'Esta precisión técnica se complementa con una estricta filosofía de construcción ligera. El uso masivo de plástico reforzado con fibra de carbono (CFRP) en las puertas, las aletas delanteras y el techo reduce el peso total y baja el centro de gravedad, asegurando que los cambios de apoyo en zonas viradas sean instantáneos y milimétricos.' }

    ]
  },
  'leyenda': {
    title: 'Leyenda',
    subtitle: 'Qué hace que un automóvil se convierta en leyenda',
    image: '/arte.webp',
    category: 'CULTURA',
    readTime: '10 MIN',
    year: '2024',
    content: [
        { type: 'heading', text: '¿Por qué algunas máquinas tienen alma mientras otras solo tienen números?', level: 2 },
        { type: 'paragraph', text: 'Millones de automóviles han sido fabricados desde el nacimiento de la industria. Pero solo unos pocos han trascendido su tiempo y las frías hojas de especificaciones para convertirse en verdaderas leyendas, transformándose en el equilibrio perfecto entre diseño de vanguardia e ingeniería extrema.' },
        { type: 'paragraph', text: '¿Qué separa a un automóvil ordinario de uno que entra en la historia y redefine nuestra cultura? La respuesta no está en su precio ni en una marca rimbombante, sino en su capacidad para combinar el uso diario con un rendimiento extraordinario en circuito, convirtiéndose en una extensión del piloto.' },
        { type: 'paragraph', text: 'Las curvas favorecen la aerodinámica pasiva y activa mediante soluciones visuales que desafían la física: aberturas profundas en el capó, ensanchamientos milimétricos en las aletas para albergar vías más anchas y rejillas de ventilación que alivian la presión extrema atrapada en las ruedas, pegando el coche al asfalto en curvas rápidas sin alterar su mítica silueta original.' },
        { type: 'image', src: '/porsche-901.webp', alt: 'Evolucionar sin olvidar el origen', caption: 'El Porsche 911 — Un legado que sigue evolucionando su ingeniería sin perder su icónica personalidad' },
        { type: 'heading', text: 'La conexión emocional y el arte invisible', level: 2 },
        { type: 'paragraph', text: 'Un automóvil se convierte en leyenda cuando logra crear una conexión emocional profunda con quienes lo conducen o simplemente lo admiran. Deja de ser metal para volverse una escultura viva que canaliza flujos de viento invisibles por debajo de su chasis plano, ocultando una brutalidad técnica masiva bajo formas hermosas y elegantes.' },
        {
          type: 'list',
          items: [
            { title: 'Porsche 911 (992 GT3 RS)', description: 'Lleva la aerodinámica de circuitos a la calle con su masivo alerón de cuello de cisne y mandos analógicos en el volante para alterar la suspensión en tiempo real.' },
            { title: 'Ferrari SF90 / F40', description: 'Transformaron la necesidad radical de refrigeración en tomas de aire dramáticas que redefinieron para siempre la estética del superdeportivo moderno.' },
            { title: 'McLaren W1 / F1', description: 'Obras maestras de la física de fluidos que utilizan el efecto suelo para succionar de forma invisible el vehículo al suelo a velocidades absurdas.' }
          ]
        },
        { type: 'heading', text: 'El factor humano y la obsesión técnica', level: 2 },
        { type: 'paragraph', text: 'Detrás de cada automóvil legendario hay personas. Ingenieros visionarios, diseñadores talentosos y mentes obsesionadas que arriesgan reputaciones enteras para defender conceptos puros, como mantener un motor atmosférico que grita con furia a 9,000 revoluciones por minuto.' },
        { type: 'paragraph', text: 'Esas personas inyectan su pasión en cada componente, cada decisión y cada milímetro de fibra de carbono. Esa energía humana es lo que finalmente da vida a la máquina, logrando que los cambios de apoyo en zonas viradas sean instantáneos y ericen la piel de quien lo escucha pasar.' },
        { type: 'heading', text: 'El tiempo como juez de la emoción', level: 2 },
        { type: 'paragraph', text: 'El tiempo es el juez final. Los automóviles que se convierten en leyendas son aquellos que siguen siendo relevantes, admirados y deseados décadas después de su creación, porque no medimos su valor en caballos de fuerza, sino en las pulsaciones del corazón de quienes los contemplan.' },
        { type: 'paragraph', text: 'En este espacio entendemos que cada automóvil es un contenedor de historias y un monumento a la emoción pura. No importa la marca, el año o el valor; lo único real es la conexión visceral y el arte en movimiento diseñado para ser recordado por generaciones.' }
    ]
}
};

export default function ArticlePage() {
  const params = useParams();
  const article = ARTICLES[params.slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="text-[10px] tracking-[6px] text-[#B8963E] font-mono">// 404</div>
          <h1 className="text-white text-5xl font-bold tracking-tight">Artículo no encontrado</h1>
          <Link href="/" className="inline-block text-[10px] tracking-[4px] text-white/50 hover:text-white transition-colors font-mono border-b border-white/10 hover:border-white pb-px">
            VOLVER AL INICIO
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">

      {/* ── HERO ── */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Gradient overlay — bottom heavy */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

        {/* Back link — top left */}
        <div className="absolute top-8 left-6 md:left-12 lg:left-20 z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-[9px] tracking-[4px] text-white/40 hover:text-white transition-colors font-mono group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            INICIO
          </Link>
        </div>

        {/* Hero text — bottom left */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-20 pb-12">
          <div className="max-w-4xl">
            {/* Meta row */}
            <div className="flex items-center gap-6 mb-6">
              <span className="text-[9px] tracking-[4px] text-[#B8963E] font-mono font-bold">
                // {article.category}
              </span>
              <span className="w-px h-3 bg-white/10" />
              <span className="text-[9px] tracking-[3px] text-white/25 font-mono">
                {article.readTime} LECTURA
              </span>
              <span className="w-px h-3 bg-white/10" />
              <span className="text-[9px] tracking-[3px] text-white/25 font-mono">
                {article.year}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[0.95] mb-5">
              {article.title}
            </h1>

            {/* Subtitle */}
            <p className="text-white/50 text-base md:text-lg font-light max-w-2xl leading-relaxed">
              {article.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* ── ARTICLE BODY ── */}
      <div className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-2xl mx-auto">
          {article.content.map((section, index) => {

            /* PARAGRAPH */
            if (section.type === 'paragraph') {
              if (section.highlight) {
                return (
                  <p key={index} className="text-white text-xl md:text-2xl font-light leading-relaxed mb-4 italic">
                    {section.text}
                  </p>
                );
              }
              return (
                <p key={index} className="text-white/55 text-base md:text-lg leading-[1.85] mb-6 font-light">
                  {section.text}
                </p>
              );
            }

            /* HEADING */
            if (section.type === 'heading') {
              return (
                <div key={index} className="mt-16 mb-8">
                  {/* Gold accent line */}
                  <div className="w-6 h-px bg-[#B8963E] mb-5" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                    {section.text}
                  </h2>
                </div>
              );
            }

            /* LIST */
            if (section.type === 'list') {
              return (
                <div key={index} className="my-12 space-y-0">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex gap-6 py-6 border-b border-white/5 first:border-t first:border-white/5">
                      {/* Index number */}
                      <div className="text-[10px] tracking-[2px] text-white/15 font-mono pt-1 min-w-[24px]">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-base mb-2 tracking-tight">
                          {item.title}
                        </h4>
                        <p className="text-white/40 text-sm leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            }

            /* IMAGE */
            if (section.type === 'image') {
              return (
                <figure key={index} className="my-14 -mx-6 md:-mx-12 lg:-mx-20">
                  <div className="relative aspect-[16/9] bg-neutral-900 overflow-hidden">
                    <Image
                      src={section.src}
                      alt={section.alt}
                      fill
                      sizes="100vw"
                      className="object-cover opacity-90"
                    />
                  </div>
                  {section.caption && (
                    <figcaption className="px-6 md:px-12 lg:px-20 mt-4 flex items-center gap-3">
                      <div className="w-3 h-px bg-[#B8963E]/50" />
                      <span className="text-[9px] tracking-[3px] text-white/40 font-mono uppercase">
                        {section.caption}
                      </span>
                    </figcaption>
                  )}
                </figure>
              );
            }

            return null;
          })}

          {/* ── END MARK ── */}
          <div className="mt-20 pt-12 border-t border-white/5 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-[9px] tracking-[4px] text-white/30 hover:text-white transition-colors font-mono group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              VOLVER AL INICIO
            </Link>
            <div className="text-[9px] tracking-[3px] text-white/10 font-mono">
              AERO <span className="text-[#B8963E]">&</span> ASPHALT
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}