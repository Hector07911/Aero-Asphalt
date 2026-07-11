'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-black py-12 px-4 border-t border-neutral-800">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <h1 className="text-white text-2xl font-bold flex items-baseline gap-3">
              <span>AERO</span>
              <span className="text-[#B8963E]">&</span>
              <span>ASPHALT</span>
            </h1>
          </div>

          {/* Copyright */}
          <p className="text-white/50 text-sm">
            © 2024 AERO & ASPHALT. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
