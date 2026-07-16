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
                  <path d="M2 6 C 55 2, 165 2, 218 5" stroke="#2D5A8C" strokeWidth="3.5" fill="none" pathLength="1" strokeDasharray="1" strokeDashoffset="0" />
                </svg>
              </span> que define cómo escala tu negocio.{' '}
              <span style={{ color: '#2D5A8C' }}>Es tu activo más valioso.</span>
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
                onClick={() => {
                  if (typeof window !== 'undefined' && typeof (window as any).fbq !== 'undefined') {
                    (window as any).fbq('track', 'Lead');
                  }
                }}
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
                <p className="text-2xl md:text-3xl font-serif font-bold text-ink">4.8/5</p>
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
            <div className="w-full max-w-xs relative">
              {/* Corner Brackets */}
              <div className="absolute -top-3 -left-3 w-4 h-4 border-t border-l border-azure z-10"></div>
              <div className="absolute -top-3 -right-3 w-4 h-4 border-t border-r border-azure z-10"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 border-b border-l border-azure z-10"></div>
              <div className="absolute -bottom-3 -right-3 w-4 h-4 border-b border-r border-azure z-10"></div>

              {/* Portrait Container */}
              <div
                className="portrait overflow-hidden aspect-[4/5] flex items-center justify-center relative rounded-sm"
                style={{
                  backgroundColor: '#0B1A2F',
                }}
              >
                {/* Photo */}
                <img
                  src="/images/alberto-lathrop.jpg"
                  alt="Alberto Lathrop"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 22%',
                    filter: 'grayscale(1) contrast(1.02)',
                  }}
                />

                {/* Scrim Gradient - Navy top/bottom */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(11,26,47,0.5) 0%, transparent 40%, transparent 60%, rgba(11,26,47,0.8) 100%)',
                    zIndex: 1,
                    pointerEvents: 'none',
                  }}
                ></div>

                {/* Caption - Top Left (PROPIEDAD INDUSTRIAL) */}
                <div
                  className="portrait-cap"
                  style={{
                    position: 'absolute',
                    top: 14,
                    left: 14,
                    zIndex: 2,
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    letterSpacing: '0.14em',
                    color: 'rgba(255,255,255,0.6)',
                    textTransform: 'uppercase',
                  }}
                >
                  Propiedad Industrial
                </div>

                {/* Name & Title - Bottom (ABSOLUTE POSITIONED) */}
                <div
                  className="portrait-name"
                  style={{
                    position: 'absolute',
                    bottom: 14,
                    left: 0,
                    right: 0,
                    textAlign: 'center',
                    color: 'rgba(255,255,255,0.9)',
                    zIndex: 2,
                  }}
                >
                  <b
                    style={{
                      fontFamily: 'Playfair Display, Georgia, serif',
                      fontWeight: 600,
                      fontSize: '1.05rem',
                      display: 'block',
                      lineHeight: 1.2,
                    }}
                  >
                    Alberto Lathrop
                  </b>
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '9px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.5)',
                      display: 'block',
                      marginTop: 4,
                    }}
                  >
                    Abogado especialista en marcas · Fundador
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
