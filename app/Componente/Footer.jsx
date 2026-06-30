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
              <span className="text-neutral-400">&</span>
              <span>ASPHALT</span>
            </h1>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>

          {/* Copyright */}
          <p className="text-neutral-500 text-sm">
            © 2024 AERO & ASPHALT. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
