"use client";

export default function Hero() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '56912345678'
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="grid-pattern absolute inset-0 opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-gray-200">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              <span className="text-xs md:text-sm font-medium text-text-muted uppercase tracking-wider">
                Especialista en Activos Intangibles · Chile
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif font-bold text-navy" style={{
              fontSize: 'clamp(28px, 8vw, 44px)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em'
            }}>
              El registro de marca es una{' '}
              <span className="italic text-accent">decisión técnica</span> que
              impacta el crecimiento de tu negocio.
              <br />
              No un mero trámite.
            </h1>

            {/* Paragraph */}
            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
              Para negocios que ya facturan y necesitan resolver su marca de
              forma técnica y definitiva.
            </p>

            {/* Protection Badges */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-navy/6 border border-navy/12 rounded-full" style={{ borderRadius: '999px' }}>
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                <div className="text-xs md:text-sm">
                  <p className="font-medium text-navy">Protección Activa</p>
                  <p className="text-text-muted">Vigilancia Marcaria</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 bg-navy/6 border border-navy/12 rounded-full" style={{ borderRadius: '999px' }}>
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                <div className="text-xs md:text-sm">
                  <p className="font-medium text-navy">Garantía de 2° Intento</p>
                  <p className="text-text-muted">Incluido en Base</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-7 md:px-8 py-3.5 md:py-4 bg-navy text-white rounded-lg font-medium text-base md:text-lg hover:bg-accent-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ boxShadow: '0 8px 24px rgba(10,22,40,0.25)' }}
              >
                Hablar por WhatsApp
                <span className="ml-1">→</span>
              </a>
              <p className="text-sm text-text-muted mt-3">
                Respuesta dentro de 24 h hábiles
              </p>
            </div>

            {/* Micro Stats */}
            <div className="flex items-center justify-start gap-8 pt-8 border-t border-gray-200">
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-navy">+250</p>
                <p className="text-xs md:text-sm text-gray-500">Marcas asesoradas</p>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-navy">4.9/5</p>
                <p className="text-xs md:text-sm text-gray-500">Google Reviews</p>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-navy">24h</p>
                <p className="text-xs md:text-sm text-gray-500">Respuesta</p>
              </div>
            </div>
          </div>

          {/* Right Column - Portrait Card */}
          <div className="flex flex-col items-center md:items-end">
            <div className="w-full max-w-sm">
              {/* Card Container */}
              <div
                className="bg-navy overflow-hidden aspect-[340/420] flex items-center justify-center relative"
                style={{
                  borderRadius: '24px',
                  boxShadow: '0 0 0 1px rgba(59,130,246,0.3), 0 24px 48px rgba(10,22,40,0.4)'
                }}
              >
                {/* Fallback: AL Initials */}
                {/* Image would go here: <Image src="/images/alberto-lathrop.jpg" alt="Alberto Lathrop" fill objectFit="cover" /> */}
                <div className="text-center">
                  <p className="font-serif text-7xl md:text-8xl font-bold" style={{ color: 'rgba(59,130,246,0.25)' }}>
                    AL
                  </p>
                </div>
              </div>

              {/* Badge under card */}
              <div className="text-center mt-6 space-y-2">
                <p className="inline-block px-3 py-1 bg-cream rounded-full text-xs font-medium text-navy uppercase tracking-wider">
                  Abogado Marcario
                </p>
                <p className="text-lg font-bold text-navy">Alberto Lathrop</p>
                <p className="text-sm text-text-muted">
                  Abogado Marcario · Fundador
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
