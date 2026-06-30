import Link from 'next/link';

export default function AboutUs() {
  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-white text-sm tracking-[4px] uppercase mb-4 font-bold">
          Quiénes Somos
        </h2>
        <p className="text-neutral-400 text-base leading-relaxed mb-6">
         es un espacio dedicado a la cultura automotriz, donde cada automóvil es apreciado por la historia que representa, la ingeniería que lo hace posible, el diseño que lo convierte en una obra de arte y la pasión que despierta en quienes lo contemplan. No importa la marca, el año o el precio; lo que importa es la emoción que transmite. Cada auto cuenta una historia, y nosotros estamos aquí para contarla.
        </p>
        <Link 
          href="/equipo"
          className="text-blue-400 text-sm tracking-[2px] uppercase hover:text-blue-300 transition-colors duration-300"
        >
          Conocé al equipo
        </Link>
      </div>
    </section>
  );
}
