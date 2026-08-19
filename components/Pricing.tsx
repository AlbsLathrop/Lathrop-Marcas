"use client";

export default function Pricing() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '61402163749'
  const whatsappLinks = {
    informeMarcario: `https://wa.me/${whatsappNumber}?text=Hola%20Alberto%2C%20quiero%20solicitar%20un%20informe%20marcario.`,
    registro: `https://wa.me/${whatsappNumber}?text=Hola%20Alberto%2C%20quiero%20iniciar%20el%20registro%20de%20mi%20marca.`,
    proteccion: `https://wa.me/${whatsappNumber}?text=Hola%20Alberto%2C%20quiero%20una%20propuesta%20de%20protecci%C3%B3n%20integral.`,
  }

  return (
    <section id="planes" className="bg-ink text-white py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-6 mb-16">
          <p className="font-mono text-xs font-medium text-azure-bright uppercase tracking-widest">
            Los planes
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            Claridad total antes de empezar.
          </h2>
          <p className="text-lg leading-relaxed text-white/70 max-w-56ch">
            Cada caso se cotiza a la medida de su complejidad. Empiezo por entender el tuyo y te envío una propuesta clara.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Informe Marcario */}
          <div className="bg-white/10 border border-white/20 rounded-lg p-8 flex flex-col shadow-sm">
            <div className="mb-6">
              <p className="font-mono text-xs text-azure-bright uppercase tracking-widest mb-2">Punto de partida</p>
              <h3 className="text-xl font-serif font-bold text-white mb-4">Informe Marcario</h3>
              <p className="text-2xl font-serif font-bold leading-tight text-azure-bright mb-2">Saber antes de invertir.</p>
              <p className="text-sm text-white/70 mb-4">Entrega en 3–5 días hábiles · Se acredita al contratar el servicio completo.</p>
              <p className="text-sm text-white/70 mb-6"><b className="font-mono text-xs text-white">Ideal para</b><br />Evaluar el riesgo antes de invertir en el proceso completo.</p>
            </div>
            <div className="space-y-2 mb-6 flex-1">
              <p className="font-mono text-xs text-white/60 uppercase tracking-widest mb-3">Incluye</p>
              {[
                'Búsqueda en software especializado',
                'Marcas idénticas o similares registradas',
                'Detección de uso en web y redes',
                'Análisis de riesgo con criterio técnico',
                'Conclusiones del abogado especialista',
                'Recomendación clara y accionable'
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-sm text-white">
                  <span className="text-azure-bright flex-shrink-0">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a href={whatsappLinks.informeMarcario} target="_blank" rel="noopener noreferrer" onClick={() => {
              if (typeof window !== 'undefined' && typeof (window as any).fbq !== 'undefined') {
                (window as any).fbq('track', 'Lead');
              }
            }} className="w-full py-2.5 border border-white/30 text-white text-center rounded font-medium text-sm hover:bg-white/10 hover:-translate-y-0.5 transition-all">
              Solicitar informe →
            </a>
          </div>

          {/* Card 2: Registro (Featured) */}
          <div className="bg-white/10 border-2 border-brass rounded-lg p-8 flex flex-col relative md:scale-105 md:z-10 shadow-lg" style={{ overflow: 'visible' }}>
            <div className="absolute text-xs font-mono font-bold uppercase tracking-widest bg-brass text-ink rounded left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0" style={{ top: '-12px', padding: '5px 12px', borderRadius: '4px' }}>
              Más solicitado
            </div>
            <div className="mb-6 pt-4">
              <h3 className="text-xl font-serif font-bold text-white mb-4">Registro de Marca</h3>
              <p className="text-2xl font-serif font-bold leading-tight text-brass mb-2">De la búsqueda al título.</p>
              <p className="text-sm text-white/70 mb-4">Alcance y clases definidos según tu modelo de negocio.</p>
              <p className="text-sm text-white/70 mb-6"><b className="font-mono text-xs text-white">Ideal para</b><br />Negocios que ya operan con clientes y nombre propio.</p>
            </div>
            <div className="space-y-2 mb-6 flex-1">
              <p className="font-mono text-xs text-white/60 uppercase tracking-widest mb-3">Incluye</p>
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
                <div key={i} className="flex gap-2 text-sm text-white">
                  <span className="text-brass flex-shrink-0">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a href={whatsappLinks.registro} target="_blank" rel="noopener noreferrer" onClick={() => {
              if (typeof window !== 'undefined' && typeof (window as any).fbq !== 'undefined') {
                (window as any).fbq('track', 'Lead');
              }
            }} className="w-full py-2.5 bg-brass text-ink text-center rounded font-medium text-sm hover:-translate-y-0.5 transition-all font-bold">
              Iniciar el proceso →
            </a>
          </div>

          {/* Card 3: Protección Integral */}
          <div className="bg-white/10 border border-white/20 rounded-lg p-8 flex flex-col shadow-sm">
            <div className="mb-6">
              <p className="font-mono text-xs text-azure-bright uppercase tracking-widest mb-2">Recomendado</p>
              <h3 className="text-xl font-serif font-bold text-white mb-4">Protección Integral</h3>
              <p className="text-2xl font-serif font-bold leading-tight text-azure-bright mb-2">Gestión y defensa continua.</p>
              <p className="text-sm text-white/70 mb-4">A la medida de tu portafolio de marcas.</p>
              <p className="text-sm text-white/70 mb-6"><b className="font-mono text-xs text-white">Ideal para</b><br />Marcas con varias líneas, sucursales o planes de expansión.</p>
            </div>
            <div className="space-y-2 mb-6 flex-1">
              <p className="font-mono text-xs text-white/60 uppercase tracking-widest mb-3">Incluye</p>
              {[
                'Todo lo del Registro de Marca',
                'Vigilancia marcaria continua 24 meses',
                'Alertas de marcas similares',
                'Asesoría en cesiones y licencias',
                'Estrategia de expansión internacional',
                'Primera renovación acompañada'
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-sm text-white">
                  <span className="text-azure-bright flex-shrink-0">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a href={whatsappLinks.proteccion} target="_blank" rel="noopener noreferrer" onClick={() => {
              if (typeof window !== 'undefined' && typeof (window as any).fbq !== 'undefined') {
                (window as any).fbq('track', 'Lead');
              }
            }} className="w-full py-2.5 border border-white/30 text-white text-center rounded font-medium text-sm hover:bg-white/10 hover:-translate-y-0.5 transition-all">
              Solicitar propuesta →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
