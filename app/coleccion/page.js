import BuildsHeader from "../Componente/BuildsHeader";
import Footer from "../Componente/Footer";

export default function Coleccion() {
  return (
    <div className="min-h-screen bg-black">
      <BuildsHeader />
      
      {/* Legacy Message */}
      <section className="py-24 px-4 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#808080] text-[clamp(0.75rem,1vw,0.9rem)] tracking-[0.3em] uppercase mb-6">
            Aero & Asphalt
          </div>
          <p className="text-[#A0A0A0] text-[clamp(1rem,1.5vw,1.2rem)] font-light tracking-wide leading-relaxed mb-8">
             Cada auto es apreciado por la historia que representa, la ingeniería que lo hace posible, el diseño que lo convierte en una obra de arte y la pasión que despierta en quienes lo contemplan. No importa la marca. Importa la emoción que transmite.
          </p>
          <div className="text-[#606060] text-[clamp(0.75rem,1vw,0.9rem)] tracking-[0.25em] uppercase">
            PASIÓN • INGENIERIA • DISEÑO
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
