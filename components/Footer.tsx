"use client";

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-ink text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-8 border-b border-white/10">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/images/lathrop-logo-light.png"
              width={462}
              height={160}
              className="h-10 md:h-10 w-auto"
              alt="Lathrop Marcas"
            />
          </a>

          {/* Links */}
          <nav className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <a
              href="#servicios"
              className="font-medium text-sm uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >
              SERVICIOS
            </a>
            <a
              href="#proceso"
              className="font-medium text-sm uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >
              PROCESO
            </a>
            <a
              href="#pricing"
              className="font-medium text-sm uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >
              PRICING
            </a>
            <a
              href="#faq"
              className="font-medium text-sm uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >
              FAQ
            </a>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 space-y-4 text-center md:text-left">
          <p className="text-sm text-gray-400">
            © 2026 Lathrop Marcas. Todos los derechos reservados.
          </p>
          <p className="text-sm text-gray-400">
            Alberto Lathrop · Abogado · Propiedad Industrial · Registro y
            gestión ante el INAPI · Chile
          </p>
          <p className="text-sm text-gray-400">
            <a
              href="/privacidad"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Política de Privacidad
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
