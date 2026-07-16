"use client";

export default function ResultadosGarantia() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '56912345678'
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <section className="bg-ink text-white py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        {/* Seal icon */}
        <div className="flex justify-center mb-8">
          <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-40">
            <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M30 12 L36 20 L45 22 L38 29 L39 38 L30 34 L21 38 L22 29 L15 22 L24 20 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
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
