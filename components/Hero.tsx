"use client";

import Image from 'next/image'

export default function Hero() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '61402163749'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola%20Alberto%2C%20quiero%20registrar%20mi%20marca.`

  return (
    <section className="bg-white relative overflow-hidden py-4 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="hero-grid grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16" style={{ alignItems: 'start', position: 'relative' }}>
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 5vw, 32px)' }}>
            {/* Badge */}
            <div className="flex items-center gap-2" style={{ marginTop: 'clamp(8px, 2vw, 16px)' }}>
              <span className="inline-block font-mono text-xs font-medium text-graphite uppercase tracking-widest">
                ● Especialista en marcas · Chile
              </span>
            </div>

            {/* Heading */}
            <h1 className="heading-large md:max-w-3xl" style={{
              lineHeight: 1.15,
              marginBottom: '44px',
              fontSize: 'clamp(2.23rem, 5vw, 3rem)'
            }}>
              Sin registrar tu marca, arriesgas{' '}
              <span className="inline-block" style={{ whiteSpace: 'nowrap', position: 'relative' }}>
                todo lo que construiste
                <svg viewBox="0 0 220 10" preserveAspectRatio="none" style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0,
                  width: '100%',
                  height: '8px'
                }}>
                  <path d="M2 6 C 55 2, 165 2, 218 5" stroke="#2D5A8C" strokeWidth="3.5" fill="none" pathLength="1" strokeDasharray="1" strokeDashoffset="0" />
                </svg>
              </span>.
            </h1>

            {/* Legal Assertion - Moved up */}
            <p className="text-base md:text-lg font-medium" style={{ color: '#2D5A8C', lineHeight: 1.4 }}>
              En Chile la marca es de quien la registra primero.
            </p>

            {/* Paragraph */}
            <p className="text-base md:text-lg leading-relaxed text-graphite max-w-56ch" style={{ textWrap: 'pretty' }}>
              Clientes, reputación, tus ventas, tu crecimiento. Todo cuelga de una marca que todavía no es legalmente tuya.
            </p>

            {/* Protection Badges */}
            <div className="flex flex-col sm:flex-row gap-4 order-last md:order-3 md:pt-2" style={{ marginTop: '32px', marginBottom: '32px' }}>
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
            <div className="md:pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && typeof (window as any).fbq !== 'undefined') {
                    (window as any).fbq('track', 'Lead');
                  }
                }}
                className="inline-flex items-center justify-center gap-1 px-7 md:px-8 py-2.5 md:py-4 min-h-11 md:min-h-auto bg-ink text-white rounded-[8px] font-medium text-base md:text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ boxShadow: '0 8px 24px rgba(10,22,40,0.25)' }}
                onMouseEnter={(e) => {
                  if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                    e.currentTarget.style.backgroundColor = '#B8DFF5';
                    e.currentTarget.style.color = '#0B1A2F';
                  }
                }}
                onMouseLeave={(e) => {
                  if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                    e.currentTarget.style.backgroundColor = '';
                    e.currentTarget.style.color = '';
                  }
                }}
              >
                Hablar por WhatsApp
                <span className="ml-1">→</span>
              </a>
              <p className="text-sm text-text-muted mt-3">
                Respuesta dentro de 24 h hábiles
              </p>
            </div>

            {/* Micro Stats */}
            <div className="flex flex-wrap items-center justify-start gap-4 sm:gap-8 pt-4 md:pt-8 border-t border-slate-200">
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-display font-bold text-ink">4.8/5</p>
                <p className="font-mono text-xs text-graphite">Google Reviews</p>
              </div>
              <div className="w-px h-8 bg-white-line hidden sm:block"></div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-display font-bold text-ink">24h</p>
                <p className="font-mono text-xs text-graphite">Respuesta</p>
              </div>
            </div>
          </div>

          {/* Right Column - Portrait Card */}
          <div className="flex flex-col items-center md:items-end order-last md:order-2 md:pt-0 pt-8">
            <div className="w-full max-w-[240px] md:max-w-xs relative" style={{ aspectRatio: '4/5' }}>
              {/* Corner Brackets */}
              <div className="absolute -top-3 -left-3 w-4 h-4 border-t border-l border-azure z-10"></div>
              <div className="absolute -top-3 -right-3 w-4 h-4 border-t border-r border-azure z-10"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 border-b border-l border-azure z-10"></div>
              <div className="absolute -bottom-3 -right-3 w-4 h-4 border-b border-r border-azure z-10"></div>

              {/* Portrait Container */}
              <div
                className="portrait overflow-hidden flex items-center justify-center relative rounded-sm w-full h-full"
                style={{
                  backgroundColor: '#0B1A2F',
                }}
              >
                {/* Photo */}
                <Image
                  src="/images/alberto-lathrop.jpg"
                  alt="Alberto Lathrop"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 320px"
                  style={{
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
