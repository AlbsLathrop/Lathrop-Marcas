"use client";

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-ink text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-8 border-b border-white/10">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <a href="/" className="flex items-center">
              <Image
                src="/images/lathrop-logo-light.png"
                width={462}
                height={160}
                className="h-10 md:h-10 w-auto"
                alt="Lathrop Marcas"
              />
            </a>
          </div>

          {/* Links */}
          <nav className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <a
              href="#proceso"
              className="px-4 py-1 md:py- min-h-11 md:min-h-auto inline-flex items-center justify-center font-medium text-sm uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >
              PROCESO
            </a>
            <a
              href="#planes"
              className="px-4 py-1 md:py- min-h-11 md:min-h-auto inline-flex items-center justify-center font-medium text-sm uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >
              PLANES
            </a>
            <a
              href="#faq"
              className="px-4 py-1 md:py- min-h-11 md:min-h-auto inline-flex items-center justify-center font-medium text-sm uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >
              FAQ
            </a>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 space-y-1 text-center md:text-left">
          <p className="text-sm text-gray-400">
            © 2026 Lathrop Marcas. Todos los derechos reservados.
          </p>
          <p className="text-sm text-gray-400">
            Alberto Lathrop · Abogado · Propiedad Industrial · Registro y
            gestión ante el INAPI · Chile
          </p>
          <p className="text-sm text-gray-400 min-h-11 md:min-h-auto inline-flex items-center">
            <a
              href="/privacidad"
              className="px-3 py-2 inline-flex items-center justify-center text-gray-400 hover:text-white transition-colors min-h-11 md:min-h-auto"
            >
              Política de Privacidad
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
