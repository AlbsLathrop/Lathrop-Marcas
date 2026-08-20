"use client";

export default function ResultadosGarantia() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '61402163749'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola%20Alberto%2C%20quiero%20empezar%20el%20proceso%20de%20registro.`

  return (
    <section className="bg-ink text-white py-12 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white/5 border border-brass rounded-xl p-8 md:p-12">
            {/* Badge */}
            <div className="absolute -top-3 left-6 bg-azure text-white text-xs font-mono font-bold uppercase px-3 py-1.5 rounded">
              Segundo intento sin honorarios
            </div>

            {/* Content */}
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6 text-left">
              Garantía: si rechazan, no pagas honorarios de nuevo.
            </h2>

            <p className="text-base md:text-lg text-white/80 mb-4 text-left leading-relaxed">
              Ningún abogado honesto te puede prometer que tu marca va a quedar registrada: eso lo decide el examinador. Lo que sí te garantizo es lo que depende de mí. Si el INAPI rechaza, vuelvo a presentar sin cobrarte honorarios de nuevo.
            </p>

            <p className="text-sm text-white/50 mb-8 text-left leading-relaxed">
              Las tasas oficiales del INAPI se pagan aparte en cada presentación.
            </p>

            {/* CTA Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && typeof (window as any).fbq !== 'undefined') {
                  (window as any).fbq('track', 'Lead');
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-8 md:px-10 py-2 md:py-3 min-h-11 md:min-h-auto bg-azure text-white rounded-[8px] font-semibold text-base transition-all duration-200 hover:bg-opacity-90 hover:-translate-y-0.5"
            >
              Empecemos →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
