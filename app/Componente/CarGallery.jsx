"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import autos from "../../data/autos.json";

function CarImage({ src, alt, style }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div style={{ background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", ...style }}>
        <div style={{ textAlign: "center", padding: "16px" }}>
          <div style={{ color: "#B8963E", fontSize: "32px", marginBottom: "8px" }}>🚗</div>
          <div style={{ color: "#B8963E", fontSize: "10px", fontFamily: "'Share Tech Mono', monospace" }}>IMAGEN NO DISPONIBLE</div>
        </div>
      </div>
    );
  }

  return (
    <Image 
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={style}
      className="object-cover"
      onError={() => setImageError(true)}
      loading="lazy"
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
              e.currentTarget.style.borderColor = "rgba(184,150,62,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
            }}
          >
            {/* Imagen */}
            <div style={{ aspectRatio: "16/9", overflow: "hidden", position: "relative" }}>
              <CarImage 
                src={build.imagenes.principal} 
                alt={build.nombre}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* Info */}
            <div style={{ padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "10px", letterSpacing: "2px", color: "#B8963E" }}>
                  {build.categoria}
                </span>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "10px", letterSpacing: "2px", color: "rgba(184,150,62,0.4)" }}>
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
                  border: "1px solid #B8963E",
                  color: "#B8963E",
                  padding: "8px 24px",
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  background: "transparent",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#B8963E";
                  e.currentTarget.style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#B8963E";
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
