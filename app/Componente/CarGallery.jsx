'use client';

import { useState } from 'react';
import autos from '../../data/autos.json';
import Link from 'next/link';

function CarImage({ src, alt, style }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div style={{ background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", ...style }}>
        <div style={{ textAlign: "center", padding: "16px" }}>
          <div style={{ color: "#9ca3af", fontSize: "32px", marginBottom: "8px" }}>🚗</div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "10px", fontFamily: "'Share Tech Mono', monospace" }}>IMAGEN NO DISPONIBLE</div>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={src}
      alt={alt}
      style={style}
      onError={() => setImageError(true)}
    />
  );
}

export default function CarGallery({ categoriaActiva, filtroActivo }) {
  // Filtrar builds según categoría y marca
  const filteredBuilds = autos.filter(build => {
    let categoriaMatch = true;
    let marcaMatch = true;
    
    if (categoriaActiva !== 'TODOS') {
      // Filtrar por categoría
      categoriaMatch = build.categoria === categoriaActiva;
      
      // Si hay un filtro de marca específico, filtrar también por marca
      if (filtroActivo !== 'TODOS') {
        marcaMatch = build.marca === filtroActivo;
      }
    } else {
      // Si está en TODOS, filtrar por marca si hay filtro
      if (filtroActivo !== 'TODOS') {
        marcaMatch = build.marca === filtroActivo;
      }
    }
    
    return categoriaMatch && marcaMatch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredBuilds.map((build) => (
        <Link key={build.id} href={`/coleccion/${build.id}`} style={{ textDecoration: "none" }}>
          <div
            style={{
              position: "relative",
              background: "#111",
              border: "1px solid rgba(255,255,255,0.05)",
              overflow: "hidden",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(156,163,175,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
            }}
          >
            {/* Imagen */}
            <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
              <CarImage 
                src={build.imagenes.principal} 
                alt={build.nombre}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Info */}
            <div style={{ padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "10px", letterSpacing: "2px", color: "#9ca3af" }}>
                  {build.categoria}
                </span>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.4)" }}>
                  {build.modelo}
                </span>
              </div>
              <h3 style={{ color: "#fff", fontWeight: "bold", fontSize: "18px", letterSpacing: "1px", margin: 0 }}>
                {build.nombre}
              </h3>
            </div>

            {/* Hover overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.6)",
                opacity: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = 1;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = 0;
              }}
            >
              <button
                style={{
                  border: "1px solid #9ca3af",
                  color: "#9ca3af",
                  padding: "8px 24px",
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  background: "transparent",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#9ca3af";
                  e.currentTarget.style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#9ca3af";
                }}
              >
                VER DETALLES
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
