# Estructura de Imágenes de Autos

Este directorio contiene todas las imágenes de los autos de la colección.

## Estructura de Carpetas

```
public/autos/
├── bmw/
│   ├── m3-e30/
│   │   ├── principal.jpg
│   │   ├── galeria-1.jpg
│   │   ├── galeria-2.jpg
│   │   ├── galeria-3.jpg
│   │   ├── galeria-4.jpg
│   │   └── galeria-5.jpg
│   └── m4-g82/
│       ├── principal.jpg
│       ├── galeria-1.jpg
│       ├── galeria-2.jpg
│       ├── galeria-3.jpg
│       ├── galeria-4.jpg
│       └── galeria-5.jpg
├── audi/
│   └── r8/
│       ├── principal.jpg
│       ├── galeria-1.jpg
│       ├── galeria-2.jpg
│       ├── galeria-3.jpg
│       ├── galeria-4.jpg
│       └── galeria-5.jpg
├── pagani/
│   └── huayra/
│       ├── principal.jpg
│       ├── galeria-1.jpg
│       ├── galeria-2.jpg
│       ├── galeria-3.jpg
│       ├── galeria-4.jpg
│       └── galeria-5.jpg
├── bugatti/
│   └── chiron/
│       ├── principal.jpg
│       ├── galeria-1.jpg
│       ├── galeria-2.jpg
│       ├── galeria-3.jpg
│       ├── galeria-4.jpg
│       └── galeria-5.jpg
```

## Cómo Agregar Imágenes de un Nuevo Auto

### 1. Crear la Carpeta del Auto
Crea una carpeta con el formato: `public/autos/[marca]/[modelo]/`

Ejemplo: `public/autos/ferrari/f40/`

### 2. Agregar las Imágenes
Cada auto necesita mínimo 6 imágenes:

- **principal.jpg** - Imagen principal que aparece en la galería y página de detalles
- **galeria-1.jpg** - Primera imagen de la galería
- **galeria-2.jpg** - Segunda imagen de la galería
- **galeria-3.jpg** - Tercera imagen de la galería
- **galeria-4.jpg** - Cuarta imagen de la galería
- **galeria-5.jpg** - Quinta imagen de la galería

### 3. Actualizar el JSON
Agrega la información del auto en `data/autos.json`:

```json
{
  "id": "ferrari-f40",
  "marca": "FERRARI",
  "modelo": "F40",
  "categoria": "CLASSICS",
  "nombre": "Ferrari F40",
  "descripcion": "Descripción del auto...",
  "especificaciones": {
    "motor": "2.9L V8 Twin-Turbo",
    "potencia": "478 HP",
    "torque": "577 Nm",
    "0-100": "4.1s",
    "velocidad_maxima": "324 km/h",
    "peso": "1,100 kg",
    "anio": "1987-1992"
  },
  "imagenes": {
    "principal": "/autos/ferrari/f40/principal.jpg",
    "galeria": [
      "/autos/ferrari/f40/galeria-1.jpg",
      "/autos/ferrari/f40/galeria-2.jpg",
      "/autos/ferrari/f40/galeria-3.jpg",
      "/autos/ferrari/f40/galeria-4.jpg",
      "/autos/ferrari/f40/galeria-5.jpg"
    ]
  }
}
```

## Recomendaciones para las Imágenes

- **Formato**: JPG o PNG (se convertirán automáticamente a WebP/AVIF)
- **Resolución**: Mínimo 1920x1080 para la imagen principal
- **Tamaño**: Menos de 2MB por imagen para mejor rendimiento
- **Calidad**: Alta calidad pero optimizada para web
- **Nombre**: Usa nombres descriptivos si agregas más imágenes de galería

## Categorías Disponibles

- **SPORTS** - Deportivos de entrada
- **PERFORMANCE** - Deportivos de alto rendimiento
- **SUPERCARS** - Superdeportivos
- **HYPERCARS** - Hípercoches exclusivos
- **CLASSICS** - Clásicos e icónicos

## Marcas Disponibles

- BMW, AUDI, PORSCHE, FERRARI, LAMBORGHINI, PAGANI, BUGATTI, NISSAN, TOYOTA, HONDA, MAZDA, MERCEDES, FORD, MCLAREN, ASTON MARTIN, KOENIGSEGG, HENNESSEY
