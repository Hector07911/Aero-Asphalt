
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'INICIO', href: '/' },
    { name: 'COLECCIÓN', href: '/coleccion' },
    { name: 'MARCAS', href: '/marcas' },
    { name: 'COMUNIDADES', href: '/comunidades' },
  ];

  return (
    <header className="w-full bg-black text-white site-header relative z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 relative">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <h1 className="title-35 font-bold flex items-baseline gap-3">
              <span className="text-white">AERO</span>
              <span className="text-neutral-500">&</span>
              <span className="text-white">ASPHALT</span>
            </h1>
          </div>
        </Link>

        {/* Hamburger button for mobile */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.href}
                className={`transition-colors duration-300 ${
                  pathname === item.href 
                    ? 'text-neutral-500' 
                    : 'text-white hover:text-neutral-500'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        {isMenuOpen && (
          <ul className="absolute top-full left-0 right-0 bg-black md:hidden flex flex-col items-center gap-4 py-6 px-6 text-sm font-light tracking-wide border-t border-gray-800">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className={`transition-colors duration-300 ${
                    pathname === item.href 
                      ? 'text-orange-500' 
                      : 'text-white hover:text-orange-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
