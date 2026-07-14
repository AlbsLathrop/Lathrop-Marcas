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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy leading-tight">
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
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-accent flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                <div>
                  <p className="font-medium text-navy">Protección Activa</p>
                  <p className="text-sm text-text-muted">Vigilancia Marcaria</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-accent flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                <div>
                  <p className="font-medium text-navy">Garantía de Segundo Intento</p>
                  <p className="text-sm text-text-muted">Incluido en Base</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-4 md:py-5 bg-navy text-white rounded-lg font-medium text-base md:text-lg hover:bg-text-primary transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.781 1.469c-1.595.893-2.788 2.39-3.643 4.408-.393.89-.643 1.902-.643 3.08 0 .837.134 1.641.394 2.458l.457 1.486-1.523 5.471 5.639-1.48.955.236c.828.215 1.671.322 2.447.322h.004c5.55 0 10.046-4.49 10.046-10.009 0-2.676-1.093-5.2-3.076-7.1a10.008 10.008 0 00-7.14-2.953z" />
                </svg>
                Hablar por WhatsApp
              </a>
              <p className="text-sm text-text-muted mt-3">
                Respuesta dentro de 24 h hábiles
              </p>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-navy">+250</p>
                <p className="text-xs md:text-sm text-text-muted">Marcas asesoradas</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-navy">4.9/5</p>
                <p className="text-xs md:text-sm text-text-muted">Google Reviews</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-navy">24h</p>
                <p className="text-xs md:text-sm text-text-muted">Respuesta</p>
              </div>
            </div>
          </div>

          {/* Right Column - Portrait Card */}
          <div className="flex flex-col items-center md:items-end">
            <div className="w-full max-w-sm">
              {/* Card Container */}
              <div className="bg-navy rounded-3xl overflow-hidden aspect-[340/420] flex items-center justify-center relative">
                {/* Fallback: AL Initials */}
                {/* Image would go here: <Image src="/images/alberto-lathrop.jpg" alt="Alberto Lathrop" fill objectFit="cover" /> */}
                <div className="text-center">
                  <p className="font-serif text-7xl md:text-8xl font-bold text-blue-900 opacity-80">
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
