"use client";

export default function Pricing() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '56912345678'
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  const plans = [
    {
      badge: 'Punto de Partida',
      title: 'Informe Marcario',
      thesis: 'Saber antes de invertir.',
      note: 'Entrega en 3–5 días hábiles · Se acredita al contratar el servicio completo.',
      ideal: 'Antes de invertir en el proceso completo',
      items: [
        'Búsqueda en software especializado',
        'Identificación de marcas idénticas o similares',
        'Detección de uso en web y redes sociales',
        'Análisis de riesgo marcario técnico',
        'Conclusiones de abogado especialista',
        'Recomendación clara y accionable'
      ],
      cta: 'Solicitar informe →',
      highlight: false
    },
    {
      badge: 'Más Solicitado',
      title: 'Registro de Marca',
      thesis: 'De la búsqueda al título.',
      note: 'Alcance y clases definidos según tu modelo de negocio.',
      ideal: 'Ecommerce y servicios con proyección nacional',
      items: [
        'Todo lo del Informe Marcario',
        'Estrategia de clases Niza',
        'Redacción y presentación ante INAPI',
        'Seguimiento completo del expediente',
        'Respuesta a requerimientos',
        'Defensa ante oposiciones',
        'Vigilancia marcaria 12 meses',
        'Garantía de segundo intento'
      ],
      cta: 'Iniciar el proceso →',
      highlight: true
    },
    {
      badge: 'Recomendado',
      title: 'Protección Integral',
      thesis: 'Gestión y defensa continua.',
      note: 'A la medida de tu portafolio de marcas.',
      ideal: 'Marcas con alta inversión en Ads o planes de expansión regional',
      items: [
        'Todo lo del Registro de Marca',
        'Vigilancia marcaria continua 24 meses',
        'Alertas de marcas similares',
        'Asesoría en cesiones y licencias',
        'Estrategia de expansión internacional',
        'Primera renovación acompañada'
      ],
      cta: 'Solicitar propuesta →',
      highlight: false
    }
  ]

  return (
    <section id="pricing" className="bg-ink py-28 md:py-24 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12 md:mb-20">
          <p className="label-badge text-azure">La Inversión</p>
          <h2 className="heading-2 text-white text-wrap balance">
            Cada caso se cotiza a la medida de su complejidad.
          </h2>
          <p className="section-subtitle text-gray-300 mx-auto">
            Empezamos por entender el tuyo y te enviamos una propuesta clara.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-8 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? 'md:scale-105 relative z-10'
                  : ''
              }`}
              style={plan.highlight ? {
                background: '#0f2040',
                border: '1px solid rgba(59,130,246,0.4)',
                boxShadow: '0 0 0 1px rgba(59,130,246,0.2), 0 24px 48px rgba(0,0,0,0.4)'
              } : {
                background: '#0a1a2f',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div className="space-y-6 flex-1 min-h-96">
                {/* Header */}
                <div>
                  <span className={`inline-block px-3 py-1 text-xs font-medium uppercase tracking-widest rounded-full ${
                    plan.highlight
                      ? 'bg-azure-bright text-white'
                      : 'bg-white/10 text-white'
                  }`}>
                    {plan.badge}
                  </span>
                  <h3 className="text-2xl font-serif font-bold mt-4 text-white">
                    {plan.title}
                  </h3>
                </div>

                {/* Thesis - Display */}
                <div>
                  <p className="font-serif font-medium text-2xl md:text-3xl text-white leading-snug italic">
                    {plan.thesis}
                  </p>
                </div>

                {/* Note */}
                <div>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {plan.note}
                  </p>
                </div>

                {/* Ideal para */}
                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white mb-2">
                    Ideal para:
                  </p>
                  <p className="text-base leading-relaxed">
                    {plan.ideal}
                  </p>
                </div>

                {/* Incluye */}
                <div className="space-y-3 border-t border-white/10 pt-6 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white">INCLUYE:</p>
                  <ul className="space-y-2 text-sm">
                    {plan.items.map((item, i) => (
                      <li key={i} style={{ color: 'rgba(255,255,255,0.85)' }}>
                        ✓ {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-center text-base mt-6 ${
                  plan.highlight
                    ? 'bg-azure text-white'
                    : 'bg-white text-ink'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Vigilancia Section */}
        <div className="bg-ink-soft rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left */}
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-medium uppercase tracking-wider rounded-full">
                Servicio Aparte
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold">
                Vigilancia para escalar con la marca limpia.
              </h3>
              <p className="text-lg text-gray-300">
                Monitoreo continuo para no enterarte tarde cuando aparece una
                marca similar.
              </p>

              <ul className="space-y-3">
                {[
                  'Alertas si alguien intenta registrar una marca parecida',
                  'Monitoreo continuo en INAPI + alertas',
                  'Defensa administrativa incluida (hasta 3 oposiciones/año)',
                  'Sin letra chica: servicio activo mientras tu suscripción esté vigente',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base">
                    <span className="text-azure flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-gray-400 pt-4">
                *Las tasas oficiales de INAPI se detallan en cada propuesta.
              </p>
            </div>

            {/* Right - Plan Options */}
            <div className="space-y-4">
              {/* Option 1 */}
              <div className="rounded-xl p-6 border border-white/10" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <p className="text-base font-semibold text-white mb-2">Plan mensual</p>
                <p className="text-gray-300 mb-4 text-sm">Cancela cuando quieras</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 bg-white text-ink font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-center text-sm"
                  style={{ boxShadow: '0 4px 12px rgba(255,255,255,0.1)' }}
                >
                  Hablar por WhatsApp →
                </a>
              </div>

              {/* Option 2 */}
              <div className="rounded-xl p-6 border" style={{
                background: '#2D5A8C',
                borderColor: 'rgba(61,122,180,0.5)',
                boxShadow: '0 8px 32px rgba(45,90,140,0.3)'
              }}>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-base font-semibold text-white">Plan anual</p>
                  <span className="inline-block px-2 py-1 bg-gold/20 text-gold text-xs font-medium uppercase rounded">
                    Mejor opción
                  </span>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 bg-white text-ink font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-center text-sm"
                  style={{ boxShadow: '0 4px 12px rgba(255,255,255,0.15)' }}
                >
                  Hablar por WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
