"use client";

export default function ResultadosGarantia() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '56912345678'
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <section className="bg-ink text-white py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        {/* Seal icon */}
        <div className="guarantee flex justify-center mb-8">
          <div className="gtee-mark">
            <svg viewBox="0 0 96 96">
              <circle cx="48" cy="48" r="35" />
              <circle className="ring" cx="48" cy="48" r="28" stroke="#3E7CB1" fill="none" strokeWidth="1" strokeDasharray="2.5 5.5" />
              <path className="chk" d="M37 48.5 L45 56.5 L60 38" stroke="#EAF2FA" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
          Resultados. Si no, garantía.
        </h2>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8">
          No trabajamos por procesos que se cierran en expediente. Trabajamos por marcas que se registran. Si el INAPI rechaza, volvemos a presentar sin cobrar honorarios de nuevo. Sin excusas, sin condiciones.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (typeof window !== 'undefined' && typeof (window as any).fbq !== 'undefined') {
              (window as any).fbq('track', 'Lead');
            }
          }}
          className="inline-flex items-center gap-2 px-8 md:px-12 py-4 bg-azure text-white rounded-lg font-semibold transition-all duration-200 hover:-translate-y-1 hover:bg-azure-bright"
        >
          Garantizado. Empecemos →
        </a>
      </div>
    </section>
  )
}
