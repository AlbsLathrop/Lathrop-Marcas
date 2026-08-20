"use client";

export default function Vigilancia() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '61402163749'
  const whatsappLinks = {
    vigilanciaMensual: `https://wa.me/${whatsappNumber}?text=Hola%20Alberto%2C%20quiero%20informaci%C3%B3n%20sobre%20vigilancia%20mensual.`,
    vigilanciaAnual: `https://wa.me/${whatsappNumber}?text=Hola%20Alberto%2C%20quiero%20informaci%C3%B3n%20sobre%20vigilancia%20anual.`,
  }

  return (
    <section className="bg-white py-1 md:py-6 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-6 mb-12">
          <p className="font-mono text-xs font-medium text-azure uppercase tracking-widest">
            Servicio aparte
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-ink leading-tight">
            Vigilancia para escalar con la marca limpia.
          </h2>
          <p className="text-lg leading-relaxed text-graphite max-w-56ch">
            Monitoreo continuo del registro para detectar marcas que puedan afectarte y actuar antes de que sea tarde.
          </p>
        </div>

        {/* Vigilancia Card */}
        <div className="bg-white border border-slate-200 rounded-[8px] p-6 md:p-12 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <ul className="space-y-2 mb-4">
                {[
                  'Alertas si alguien intenta registrar marca parecida',
                  'Monitoreo continuo en INAPI',
                  'Defensa administrativa incluida (hasta 3 oposiciones/año)',
                  'Servicio activo mientras tu suscripción esté vigente'
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-ink">
                    <span className="text-azure flex-shrink-0 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-graphite">No incluye tasas oficiales ni procesos judiciales.</p>
            </div>

            {/* Right - Plans */}
            <div className="flex flex-col gap-4">
              <div className="border border-slate-200 rounded p-4 bg-white/30">
                <p className="font-display font-bold text-lg text-ink mb-1">Plan mensual</p>
                <p className="text-sm text-graphite">Cancela cuando quieras</p>
                <a href={whatsappLinks.vigilanciaMensual} target="_blank" rel="noopener noreferrer" onClick={() => {
                  if (typeof window !== 'undefined' && typeof (window as any).fbq !== 'undefined') {
                    (window as any).fbq('track', 'Lead');
                  }
                }} className="w-full mt-4 py-2.5 md:py-2 min-h-11 md:min-h-auto inline-flex items-center justify-center border border-slate-200 text-ink text-center rounded font-medium text-sm hover:bg-white transition-all">
                  Hablar por WhatsApp →
                </a>
              </div>
              <div className="border-2 border-brass rounded p-4 relative shadow-md" style={{ overflow: 'visible' }}>
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-4 bg-azure text-white text-xs font-mono font-bold uppercase px-2 py-1 rounded">
                  Mejor opción
                </span>
                <p className="font-display font-bold text-lg text-ink mb-1 pt-2">Plan anual</p>
                <p className="text-sm text-graphite">Cobertura continua todo el año</p>
                <a href={whatsappLinks.vigilanciaAnual} target="_blank" rel="noopener noreferrer" onClick={() => {
                  if (typeof window !== 'undefined' && typeof (window as any).fbq !== 'undefined') {
                    (window as any).fbq('track', 'Lead');
                  }
                }} className="w-full mt-4 py-2.5 md:py-2 min-h-11 md:min-h-auto inline-flex items-center justify-center bg-ink text-white text-center rounded font-medium text-sm hover:opacity-90 transition-all">
                  Hablar por WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-graphite">
          Las tasas oficiales de INAPI se detallan en cada propuesta.
        </p>
      </div>
    </section>
  )
}
