"use client";

export default function Pricing() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '61402163749'
  const whatsappLinks = {
    informeMarcario: `https://wa.me/${whatsappNumber}?text=Hola%20Alberto%2C%20quiero%20solicitar%20un%20informe%20marcario.`,
    registro: `https://wa.me/${whatsappNumber}?text=Hola%20Alberto%2C%20quiero%20iniciar%20el%20registro%20de%20mi%20marca.`,
    proteccion: `https://wa.me/${whatsappNumber}?text=Hola%20Alberto%2C%20quiero%20una%20propuesta%20de%20protecci%C3%B3n%20integral.`,
    vigilanciaMensual: `https://wa.me/${whatsappNumber}?text=Hola%20Alberto%2C%20quiero%20informaci%C3%B3n%20sobre%20vigilancia%20mensual.`,
    vigilanciaAnual: `https://wa.me/${whatsappNumber}?text=Hola%20Alberto%2C%20quiero%20informaci%C3%B3n%20sobre%20vigilancia%20anual.`,
  }

  return (
    <section id="planes" className="bg-bone py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-6 mb-16">
          <p className="font-mono text-xs font-medium text-azure uppercase tracking-widest">
            Los planes
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink leading-tight">
            Claridad total antes de empezar.
          </h2>
          <p className="text-lg leading-relaxed text-graphite max-w-56ch">
            Cada caso se cotiza a la medida de su complejidad. Empiezo por entender el tuyo y te envío una propuesta clara.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Informe Marcario */}
          <div className="bg-white border border-bone-line rounded-lg p-8 flex flex-col shadow-sm">
            <div className="mb-6">
              <p className="font-mono text-xs text-azure uppercase tracking-widest mb-2">Punto de partida</p>
              <h3 className="text-xl font-serif font-bold text-ink mb-4">Informe Marcario</h3>
              <p className="text-2xl font-serif font-bold leading-tight text-azure mb-2">Saber antes de invertir.</p>
              <p className="text-sm text-graphite mb-4">Entrega en 3–5 días hábiles · Se acredita al contratar el servicio completo.</p>
              <p className="text-sm text-graphite mb-6"><b className="font-mono text-xs text-ink">Ideal para</b><br />Evaluar el riesgo antes de invertir en el proceso completo.</p>
            </div>
            <div className="space-y-2 mb-6 flex-1">
              <p className="font-mono text-xs text-graphite uppercase tracking-widest mb-3">Incluye</p>
              {[
                'Búsqueda en software especializado',
                'Marcas idénticas o similares registradas',
                'Detección de uso en web y redes',
                'Análisis de riesgo con criterio técnico',
                'Conclusiones del abogado especialista',
                'Recomendación clara y accionable'
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-sm text-ink">
                  <span className="text-azure flex-shrink-0">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a href={whatsappLinks.informeMarcario} target="_blank" rel="noopener noreferrer" onClick={() => {
              if (typeof window !== 'undefined' && typeof (window as any).fbq !== 'undefined') {
                (window as any).fbq('track', 'Lead');
              }
            }} className="w-full py-2.5 border border-bone-line text-ink text-center rounded font-medium text-sm hover:bg-bone hover:-translate-y-0.5 transition-all">
              Solicitar informe →
            </a>
          </div>

          {/* Card 2: Registro (Featured) */}
          <div className="bg-white border-2 border-brass rounded-lg p-8 flex flex-col relative md:scale-105 md:z-10 shadow-lg" style={{ overflow: 'visible' }}>
            <div className="absolute text-xs font-mono font-bold uppercase tracking-widest bg-brass text-ink rounded left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0" style={{ top: '-12px', padding: '5px 12px', borderRadius: '4px' }}>
              Más solicitado
            </div>
            <div className="mb-6 pt-4">
              <h3 className="text-xl font-serif font-bold text-ink mb-4">Registro de Marca</h3>
              <p className="text-2xl font-serif font-bold leading-tight text-brass mb-2">De la búsqueda al título.</p>
              <p className="text-sm text-graphite mb-4">Alcance y clases definidos según tu modelo de negocio.</p>
              <p className="text-sm text-graphite mb-6"><b className="font-mono text-xs text-ink">Ideal para</b><br />Negocios que ya operan con clientes y nombre propio.</p>
            </div>
            <div className="space-y-2 mb-6 flex-1">
              <p className="font-mono text-xs text-graphite uppercase tracking-widest mb-3">Incluye</p>
              {[
                'Todo lo del Informe Marcario',
                'Estrategia de clases Niza',
                'Redacción y presentación ante INAPI',
                'Seguimiento del expediente',
                'Respuesta a requerimientos',
                'Defensa ante oposiciones',
                'Vigilancia marcaria 12 meses',
                'Garantía de segundo intento'
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-sm text-ink">
                  <span className="text-brass flex-shrink-0">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a href={whatsappLinks.registro} target="_blank" rel="noopener noreferrer" onClick={() => {
              if (typeof window !== 'undefined' && typeof (window as any).fbq !== 'undefined') {
                (window as any).fbq('track', 'Lead');
              }
            }} className="w-full py-2.5 bg-azure text-white text-center rounded font-medium text-sm hover:-translate-y-0.5 transition-all">
              Iniciar el proceso →
            </a>
          </div>

          {/* Card 3: Protección Integral */}
          <div className="bg-white border border-bone-line rounded-lg p-8 flex flex-col shadow-sm">
            <div className="mb-6">
              <p className="font-mono text-xs text-azure uppercase tracking-widest mb-2">Recomendado</p>
              <h3 className="text-xl font-serif font-bold text-ink mb-4">Protección Integral</h3>
              <p className="text-2xl font-serif font-bold leading-tight text-azure mb-2">Gestión y defensa continua.</p>
              <p className="text-sm text-graphite mb-4">A la medida de tu portafolio de marcas.</p>
              <p className="text-sm text-graphite mb-6"><b className="font-mono text-xs text-ink">Ideal para</b><br />Marcas con varias líneas, sucursales o planes de expansión.</p>
            </div>
            <div className="space-y-2 mb-6 flex-1">
              <p className="font-mono text-xs text-graphite uppercase tracking-widest mb-3">Incluye</p>
              {[
                'Todo lo del Registro de Marca',
                'Vigilancia marcaria continua 24 meses',
                'Alertas de marcas similares',
                'Asesoría en cesiones y licencias',
                'Estrategia de expansión internacional',
                'Primera renovación acompañada'
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-sm text-ink">
                  <span className="text-azure flex-shrink-0">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a href={whatsappLinks.proteccion} target="_blank" rel="noopener noreferrer" onClick={() => {
              if (typeof window !== 'undefined' && typeof (window as any).fbq !== 'undefined') {
                (window as any).fbq('track', 'Lead');
              }
            }} className="w-full py-2.5 border border-bone-line text-ink text-center rounded font-medium text-sm hover:bg-bone hover:-translate-y-0.5 transition-all">
              Solicitar propuesta →
            </a>
          </div>
        </div>

        {/* Vigilancia Section */}
        <div className="bg-white border border-bone-line rounded-lg p-8 md:p-12 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <p className="font-mono text-xs text-azure uppercase tracking-widest mb-3">Servicio aparte</p>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-ink mb-4">Vigilancia para escalar con la marca limpia.</h3>
              <p className="text-graphite mb-6">Monitoreo continuo del registro para detectar marcas que puedan afectarte y actuar antes de que sea tarde.</p>
              <ul className="space-y-2 mb-8">
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
              <div className="border border-bone-line rounded p-4 bg-bone/30">
                <p className="font-serif font-bold text-lg text-ink mb-1">Plan mensual</p>
                <p className="text-sm text-graphite">Cancela cuando quieras</p>
                <a href={whatsappLinks.vigilanciaMensual} target="_blank" rel="noopener noreferrer" onClick={() => {
                  if (typeof window !== 'undefined' && typeof (window as any).fbq !== 'undefined') {
                    (window as any).fbq('track', 'Lead');
                  }
                }} className="w-full mt-4 py-2.5 border border-bone-line text-ink text-center rounded font-medium text-sm hover:bg-bone transition-all block">
                  Hablar por WhatsApp →
                </a>
              </div>
              <div className="border-2 border-brass rounded p-4 relative shadow-md" style={{ overflow: 'visible' }}>
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-4 bg-brass text-ink text-xs font-mono font-bold uppercase px-2 py-1 rounded">
                  Mejor opción
                </span>
                <p className="font-serif font-bold text-lg text-ink mb-1 pt-2">Plan anual</p>
                <p className="text-sm text-graphite">Cobertura continua todo el año</p>
                <a href={whatsappLinks.vigilanciaAnual} target="_blank" rel="noopener noreferrer" onClick={() => {
                  if (typeof window !== 'undefined' && typeof (window as any).fbq !== 'undefined') {
                    (window as any).fbq('track', 'Lead');
                  }
                }} className="w-full mt-4 py-2.5 bg-ink text-white text-center rounded font-medium text-sm hover:opacity-90 transition-all block">
                  Hablar por WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-graphite mt-8">
          Las tasas oficiales de INAPI se detallan en cada propuesta.
        </p>
      </div>
    </section>
  )
}
