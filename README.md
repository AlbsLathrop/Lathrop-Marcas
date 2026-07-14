# Lathrop Marcas — Next.js Landing Page

Sitio web de presentación para **Lathrop Marcas**, firma especializada en registro y defensa de marcas ante el INAPI, Chile.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3.4
- **Language:** TypeScript
- **Deployment:** Vercel

## Estructura del Proyecto

```
lathrop-marcas-next/
├── app/
│   ├── layout.tsx          # Layout global + fuentes (Playfair Display, Inter)
│   ├── page.tsx            # Página principal (composición de todas las secciones)
│   └── globals.css         # Reset + Tailwind + utilidades custom
├── components/             # 14 componentes React
│   ├── Navbar.tsx          # Navegación sticky + botón WhatsApp
│   ├── Hero.tsx            # Banner con propuesta de valor + retrato AL
│   ├── AboutFirm.tsx       # Descripción de la firma + checks
│   ├── Risk.tsx            # 3 cards glassmorphism sobre riesgos
│   ├── Services.tsx        # 3 servicios principales
│   ├── Process.tsx         # 6 pasos con animación scroll
│   ├── Pricing.tsx         # 3 planes + vigilancia marcaria
│   ├── VideoTestimonials.tsx # 2 videos de casos reales
│   ├── Reviews.tsx         # Slider autoplay de reseñas Google
│   ├── ClientLogos.tsx     # Grid 12 logos (fallback a texto)
│   ├── WhyUs.tsx           # Garantía de segundo intento
│   ├── FAQ.tsx             # Acordeón 6 preguntas
│   ├── CTAFinal.tsx        # CTA final
│   └── Footer.tsx          # Pie + links anclas
├── public/
│   └── images/
│       └── logos/          # Carpeta para logos de clientes (vacía, .gitkeep)
├── tailwind.config.ts      # Paleta custom (navy, cream, accent, etc.)
├── next.config.js          # Configuración Next.js
├── vercel.json             # Deploy en Vercel
├── .env.local              # Variables de entorno (WHATSAPP_NUMBER, GOOGLE_REVIEWS_URL)
└── .gitignore              # Estándar Next.js
```

## Desarrollo Local

```bash
cd ~/Desktop/lathrop-marcas-next

# Instalar dependencias (ya están instaladas)
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Abrir en navegador
# http://localhost:3000
```

## Build y Producción

```bash
# Compilar para producción
npm run build

# Iniciar servidor optimizado
npm start
```

## Variables de Entorno

Edita `.env.local` para actualizar:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=56912345678         # Tu número de WhatsApp
NEXT_PUBLIC_GOOGLE_REVIEWS_URL=#                # Link a tu perfil Google Business
```

## Customización

### Paleta de Colores

Edita `tailwind.config.ts` en la sección `colors`:

```ts
colors: {
  navy: '#0a1628',          // Fondo oscuro principal
  'navy-light': '#0f2040',
  accent: '#3b82f6',        // Azul accent
  'accent-dark': '#1d4ed8',
  cream: '#f8f7f4',         // Fondo claro
  'text-primary': '#1a2744',
  'text-muted': '#6b7a9a',
}
```

### Logos de Clientes

Agrega archivos `.png` en `/public/images/logos/`:

- `cherry-boom.png`
- `starthunt.png`
- `rocas-del-tabo.png`
- `bagz.png`
- `ideniglass.png`
- `mirador-del-tabo.png`
- `casa-torreon.png`
- `tierra-magna.png`
- `valfra.png`

Los logos se mostrarán automáticamente en `ClientLogos.tsx`. Si no existen, fallback a texto.

### Foto de Alberto

Agrega `/public/images/alberto-lathrop.jpg`. Si no existe, se muestra fallback "AL" (iniciales).

Para usar imagen:

```tsx
<Image 
  src="/images/alberto-lathrop.jpg" 
  alt="Alberto Lathrop" 
  fill 
  objectFit="cover" 
/>
```

### Videos de Testimonios

En `components/VideoTestimonials.tsx`, actualiza los IDs de YouTube:

```tsx
const videos = [
  { ..., videoUrl: 'VIDEO_ID_1' },
  { ..., videoUrl: 'VIDEO_ID_2' },
]
```

## Animaciones

- **Process.tsx:** Cards entran con fade + slide desde la derecha al hacer scroll
- **Reviews.tsx:** Slider autoplay cada 4s (pausa al hover)
- **Respeta prefers-reduced-motion:** Todas las animaciones se desactivan si el usuario lo solicita

## Deploy en Vercel

El proyecto está configurado para Vercel. Solo necesitas:

1. Conectar tu repositorio GitHub
2. Las variables de entorno se configuran en Vercel Dashboard
3. Deploy automático en cada push a `main`

## Notas

- Contenido en español completamente
- Responsive: mobile-first (375px mobile, 1440px desktop)
- TypeScript strict mode activado
- ESLint configurado
- Zero-config de Next.js (no requiere configuración especial)

## Licencia

Propietario © 2026 Lathrop Marcas
