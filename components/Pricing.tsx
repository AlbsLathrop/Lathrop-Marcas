"use client";

export default function Pricing() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '56912345678'
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <section id="planes" className="bg-ink text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-6 mb-16">
          <p className="font-mono text-xs font-medium text-brass uppercase tracking-widest">
            Los planes
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Claridad total antes de empezar.
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 max-w-56ch">
            Cada caso se cotiza a la medida de su complejidad. Empezamos por entender el tuyo y te enviamos una propuesta clara.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Informe Marcario */}
          <div className="bg-ink-soft/50 border border-white/10 rounded-lg p-8 flex flex-col">
            <div className="mb-6">
              <p className="font-mono text-xs text-white/60 uppercase tracking-widest mb-2">Punto de partida</p>
              <h3 className="text-xl font-serif font-bold mb-4">Informe Marcario</h3>
              <p className="text-2xl font-serif font-bold leading-tight text-bone mb-2">Saber antes de invertir.</p>
              <p className="text-sm text-white/50 mb-4">Entrega en 3–5 días hábiles · Se acredita al contratar el servicio completo.</p>
              <p className="text-sm text-white/70 mb-6"><b className="font-mono text-xs text-azure-bright">Ideal para</b><br />Evaluar el riesgo antes de invertir en el proceso completo.</p>
            </div>
            <div className="space-y-2 mb-6 flex-1">
              <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-3">Incluye</p>
              {[
                'Búsqueda en software especializado',
                'Marcas idénticas o similares registradas',
                'Detección de uso en web y redes',
                'Análisis de riesgo con criterio técnico',
                'Conclusiones del abogado especialista',
                'Recomendación clara y accionable'
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-sm text-white/80">
                  <span className="text-azure-bright flex-shrink-0">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full py-2.5 border border-white/20 text-white text-center rounded font-medium text-sm hover:border-azure-bright hover:-translate-y-0.5 transition-all">
              Solicitar informe →
            </a>
          </div>

          {/* Card 2: Registro (Featured) */}
          <div className="bg-ink-soft border border-azure rounded-lg p-8 flex flex-col relative md:scale-105 md:z-10" style={{ boxShadow: '0 0 0 1px rgba(45,90,140,.4), 0 24px 60px -20px rgba(45,90,140,.55)' }}>
            <div className="absolute -top-3 left-8 bg-brass text-ink px-3 py-1 rounded text-xs font-mono font-bold uppercase tracking-widest">
              Más solicitado
            </div>
            <div className="mb-6 pt-4">
              <h3 className="text-xl font-serif font-bold mb-4">Registro de Marca</h3>
              <p className="text-2xl font-serif font-bold leading-tight text-bone mb-2">De la búsqueda al título.</p>
              <p className="text-sm text-white/50 mb-4">Alcance y clases definidos según tu modelo de negocio.</p>
              <p className="text-sm text-white/70 mb-6"><b className="font-mono text-xs text-azure-bright">Ideal para</b><br />Ecommerce y servicios con proyección nacional.</p>
            </div>
            <div className="space-y-2 mb-6 flex-1">
              <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-3">Incluye</p>
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
                <div key={i} className="flex gap-2 text-sm text-white/80">
                  <span className="text-azure-bright flex-shrink-0">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full py-2.5 bg-azure text-white text-center rounded font-medium text-sm hover:-translate-y-0.5 transition-all">
              Iniciar el proceso →
            </a>
          </div>

          {/* Card 3: Protección Integral */}
          <div className="bg-ink-soft/50 border border-white/10 rounded-lg p-8 flex flex-col">
            <div className="mb-6">
              <p className="font-mono text-xs text-white/60 uppercase tracking-widest mb-2">Recomendado</p>
              <h3 className="text-xl font-serif font-bold mb-4">Protección Integral</h3>
              <p className="text-2xl font-serif font-bold leading-tight text-bone mb-2">Gestión y defensa continua.</p>
              <p className="text-sm text-white/50 mb-4">A la medida de tu portafolio de marcas.</p>
              <p className="text-sm text-white/70 mb-6"><b className="font-mono text-xs text-azure-bright">Ideal para</b><br />Marcas con alta inversión en Ads o planes regional.</p>
            </div>
            <div className="space-y-2 mb-6 flex-1">
              <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-3">Incluye</p>
              {[
                'Todo lo del Registro de Marca',
                'Vigilancia marcaria continua 24 meses',
                'Alertas de marcas similares',
                'Asesoría en cesiones y licencias',
                'Estrategia de expansión internacional',
                'Primera renovación acompañada'
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-sm text-white/80">
                  <span className="text-azure-bright flex-shrink-0">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full py-2.5 border border-white/20 text-white text-center rounded font-medium text-sm hover:border-azure-bright hover:-translate-y-0.5 transition-all">
              Solicitar propuesta →
            </a>
          </div>
        </div>

        {/* Vigilancia Section */}
        <div className="bg-ink-soft/40 border border-white/10 rounded-lg p-8 md:p-12 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <p className="font-mono text-xs text-brass uppercase tracking-widest mb-3">Servicio aparte</p>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Vigilancia para escalar con la marca limpia.</h3>
              <p className="text-white/70 mb-6">Monitoreo continuo del registro para detectar marcas que puedan afectarte y actuar antes de que sea tarde.</p>
              <ul className="space-y-2 mb-8">
                {[
                  'Alertas si alguien intenta registrar marca parecida',
                  'Monitoreo continuo en INAPI',
                  'Defensa administrativa incluida (hasta 3 oposiciones/año)',
                  'Servicio activo mientras tu suscripción esté vigente'
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-white/80">
                    <span className="text-azure-bright flex-shrink-0 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-white/50">No incluye tasas oficiales ni procesos judiciales.</p>
            </div>

            {/* Right - Plans */}
            <div className="flex flex-col gap-4">
              <div className="border border-white/15 rounded p-4">
                <p className="font-serif font-bold text-lg text-bone mb-1">Plan mensual</p>
                <p className="text-sm text-white/60">Cancela cuando quieras</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full mt-4 py-2.5 border border-white/20 text-white text-center rounded font-medium text-sm hover:border-azure-bright transition-all block">
                  Hablar por WhatsApp →
                </a>
              </div>
              <div className="border border-azure rounded p-4 relative" style={{ boxShadow: '0 8px 32px rgba(45,90,140,0.3)' }}>
                <span className="absolute -top-2.5 right-4 bg-azure text-white text-xs font-mono font-bold uppercase px-2 py-1 rounded">
                  Mejor opción
                </span>
                <p className="font-serif font-bold text-lg text-bone mb-1 pt-2">Plan anual</p>
                <p className="text-sm text-white/60">Cobertura continua todo el año</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full mt-4 py-2.5 border border-white/20 text-white text-center rounded font-medium text-sm hover:border-azure-bright transition-all block">
                  Hablar por WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-white/40 mt-8">
          Las tasas oficiales de INAPI se detallan en cada propuesta.
        </p>
      </div>
    </section>
  )
}
