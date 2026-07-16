"use client";

export default function Hero() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '56912345678'
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <section className="bg-bone py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <span className="inline-block font-mono text-xs font-medium text-graphite uppercase tracking-widest">
                ● Especialista en propiedad industrial · Chile
              </span>
            </div>

            {/* Heading */}
            <h1 className="heading-large">
              El registro de marca es una{' '}
              <span className="inline-block" style={{ whiteSpace: 'nowrap', position: 'relative' }}>
                decisión técnica
                <svg viewBox="0 0 220 10" preserveAspectRatio="none" style={{
                  position: 'absolute',
                  bottom: '-2px',
                  left: 0,
                  width: '100%',
                  height: '8px'
                }}>
                  <path d="M2 6 C 55 2, 165 2, 218 5" stroke="#2D5A8C" strokeWidth="1" fill="none" pathLength="1" strokeDasharray="1" strokeDashoffset="0" />
                </svg>
              </span> que define cómo escala tu negocio. No un trámite: tu activo más valioso.
            </h1>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-graphite max-w-56ch" style={{ textWrap: 'pretty' }}>
              Para negocios que ya facturan y quieren proteger lo que construyeron para seguir creciendo con respaldo.
            </p>

            {/* Protection Badges */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-azure flex-shrink-0 mt-0.5"></div>
                <div>
                  <p className="font-medium text-ink text-sm">Protección Activa</p>
                  <p className="text-graphite text-xs">Vigilancia marcaria</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-azure flex-shrink-0 mt-0.5"></div>
                <div>
                  <p className="font-medium text-ink text-sm">Garantía de 2º Intento</p>
                  <p className="text-graphite text-xs">Incluido en base</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-7 md:px-8 py-3.5 md:py-4 bg-ink text-white rounded-lg font-medium text-base md:text-lg hover:bg-azure-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
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
            <div className="flex items-center justify-start gap-8 pt-8 border-t border-bone-line">
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-serif font-bold text-ink">+250</p>
                <p className="font-mono text-xs text-graphite">Activos gestionados</p>
              </div>
              <div className="w-px h-8 bg-bone-line"></div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-serif font-bold text-ink">4.9/5</p>
                <p className="font-mono text-xs text-graphite">Google Reviews</p>
              </div>
              <div className="w-px h-8 bg-bone-line"></div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-serif font-bold text-ink">24h</p>
                <p className="font-mono text-xs text-graphite">Respuesta</p>
              </div>
            </div>
          </div>

          {/* Right Column - Portrait Card */}
          <div className="flex flex-col items-center md:items-end">
            <div className="w-full max-w-sm relative">
              {/* Corner Brackets */}
              <div className="absolute -top-3 -left-3 w-4 h-4 border-t border-l border-azure z-10"></div>
              <div className="absolute -top-3 -right-3 w-4 h-4 border-t border-r border-azure z-10"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 border-b border-l border-azure z-10"></div>
              <div className="absolute -bottom-3 -right-3 w-4 h-4 border-b border-r border-azure z-10"></div>

              {/* Card Container */}
              <div
                className="bg-ink overflow-hidden aspect-[340/420] flex flex-col items-center justify-center relative"
                style={{
                  borderRadius: '8px'
                }}
              >
                {/* Silhouette / AL Initials */}
                <div className="text-center">
                  <p className="font-serif text-7xl md:text-8xl font-bold" style={{ color: 'rgba(45,90,140,0.3)' }}>
                    AL
                  </p>
                </div>
              </div>

              {/* Badge under card */}
              <div className="text-center mt-8 space-y-1">
                <p className="font-mono text-xs font-medium text-azure uppercase tracking-widest">
                  Propiedad Industrial
                </p>
                <p className="text-base font-serif font-medium text-ink">Alberto Lathrop</p>
                <p className="text-sm text-graphite">
                  Abogado especialista en marcas · Fundador
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
