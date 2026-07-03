'use client';

import { useState } from 'react';
import CarGallery from './CarGallery';

const CATEGORIAS = [
  { id: "TODOS", label: "TODOS" },
  { id: "SPORTS", label: "SPORTS" },
  { id: "PERFORMANCE", label: "PERFORMANCE" },
  { id: "SUPERCARS", label: "SUPERCARS" },
  { id: "HYPERCARS", label: "HYPERCARS" },
  { id: "CLASSICS", label: "CLASSICS" },
];

const FILTROS_POR_CATEGORIA = {
  TODOS: ["TODOS", "BMW", "AUDI", "PORSCHE", "FERRARI", "LAMBORGHINI", "PAGANI", "BUGATTI", "NISSAN", "TOYOTA", "HONDA", "MAZDA"],
  SPORTS: ["TODOS", "BMW", "AUDI", "PORSCHE", "NISSAN", "TOYOTA", "HONDA", "FORD"],
  PERFORMANCE: ["TODOS", "BMW", "AUDI", "PORSCHE", "MERCEDES"],
  SUPERCARS: ["TODOS", "FERRARI", "LAMBORGHINI", "MCLAREN", "ASTON MARTIN"],
  HYPERCARS: ["TODOS", "BUGATTI", "PAGANI", "KOENIGSEGG", "HENNESSEY"],
  CLASSICS: ["TODOS", "BMW", "FERRARI", "PORSCHE", "TOYOTA", "NISSAN", "HONDA", "MAZDA", "MERCEDES", "FORD"],
};

export default function BuildsHeader() {
  const [categoriaActiva, setCategoriaActiva] = useState("TODOS");
  const [filtroActivo, setFiltroActivo] = useState("TODOS");

  const handleCategoria = (id) => {
    setCategoriaActiva(id);
    setFiltroActivo("TODOS");
  };

  return (
    <div
      style={{
        background: "#0a0a0a",
        padding: "120px 40px 32px",
        minHeight: "100vh",
        fontFamily: "'Barlow Condensed', sans-serif",
      }}
    >
      {/* TAG SUPERIOR */}
      <div
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "10px",
          letterSpacing: "4px",
          color: "#C8C8C8",
          textAlign: "center",
          marginBottom: "14px",
        }}
      >
        // NUESTRA COLECCIÓN  
      </div>

      {/* TÍTULO */}
      <div
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(52px, 8vw, 80px)",
          letterSpacing: "3px",
          textAlign: "center",
          lineHeight: 1,
          marginBottom: "12px",
          transition: "all 0.3s ease",
        }}
      >
        <span style={{ color: "#fff" }}>COLECCIÓN</span> 
      </div>

      {/* CONTADOR */}
      <div
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "12px",
          letterSpacing: "2px",
          color: "rgba(228,228,228,0.35)",
          textAlign: "center",
          marginBottom: "36px",
        }}
      >
        Una selección de máquinas que marcaron la historia<br/>del diseño, la ingeniería y la pasión automotriz.
      </div>

      {/* SELECTOR DE CATEGORÍAS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "6px",
          flexWrap: "wrap",
          marginBottom: "16px",
        }}
      >
        {CATEGORIAS.map((c) => (
          <button
            key={c.id}
            onClick={() => handleCategoria(c.id)}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "16px",
              letterSpacing: "2px",
              padding: "8px 22px",
              border: categoriaActiva === c.id
                ? "1px solid #9ca3af"
                : "1px solid rgba(255,255,255,0.12)",
              background: categoriaActiva === c.id
                ? "#9ca3af"
                : "transparent",
              color: categoriaActiva === c.id
                ? "#000"
                : "rgba(255,255,255,0.4)",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              if (categoriaActiva !== c.id) {
                e.currentTarget.style.borderColor = "#9ca3af";
                e.currentTarget.style.color = "#9ca3af";
              }
            }}
            onMouseLeave={(e) => {
              if (categoriaActiva !== c.id) {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "rgba(255,255,255,0.4)";
              }
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* DIVISOR */}
      <div
        style={{
          width: "100%",
          height: "1px",
          background: "rgba(255,255,255,0.05)",
          marginBottom: "16px",
        }}
      />

      {/* FILTROS POR MARCA */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "6px",
          flexWrap: "wrap",
          marginBottom: "24px",
        }}
      >
        {FILTROS_POR_CATEGORIA[categoriaActiva].map((f) => (
          <button
            key={f}
            onClick={() => setFiltroActivo(f)}
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "10px",
              letterSpacing: "2px",
              padding: "5px 14px",
              border: filtroActivo === f
                ? "1px solid rgba(156,163,175,0.6)"
                : "1px solid rgba(255,255,255,0.07)",
              background: filtroActivo === f
                ? "rgba(156,163,175,0.08)"
                : "transparent",
              color: filtroActivo === f
                ? "#9ca3af"
                : "rgba(255,255,255,0.3)",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              if (filtroActivo !== f) {
                e.currentTarget.style.borderColor = "rgba(156,163,175,0.6)";
                e.currentTarget.style.color = "#9ca3af";
              }
            }}
            onMouseLeave={(e) => {
              if (filtroActivo !== f) {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.color = "rgba(255,255,255,0.3)";
              }
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* GALERÍA DE AUTOS */}
      <div style={{ marginTop: "40px" }}>
        <CarGallery categoriaActiva={categoriaActiva} filtroActivo={filtroActivo} />
      </div>

    </div>
  );
}
