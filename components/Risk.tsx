"use client";

export default function Risk() {
  const risks = [
    {
      title: 'Pérdida del nombre comercial',
      description:
        'Un tercero puede registrar tu nombre antes que tú y obligarte a un reposicionamiento completo: nombre, web, redes, y todo el capital de marca que construiste hasta ahora.',
    },
    {
      title: 'Fricción comercial en expansión',
      description:
        'Mercado Libre Tienda Oficial, distribuidores internacionales y cadenas de retail exigen título de marca vigente. Sin él, cada canal nuevo que quieras abrir tiene un freno legal antes de empezar.',
    },
    {
      title: 'Activo intangible sin respaldo legal',
      description:
        'En una venta, fusión, ronda de inversión o due diligence, una marca no registrada no tiene valor contable. El trabajo construido queda en narrativa, no en documento.',
    },
  ]

  return (
    <section className="bg-ink-light text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-6 mb-12 md:mb-16">
          <p className="label-badge text-azure">El Riesgo de No Actuar</p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold leading-tight">
            Sin registro vigente, tu nombre trabaja para quien llegue primero.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Cada día que operas sin marca registrada es un día en que cualquier
            competidor puede apropiarse legalmente de tu identidad comercial.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {risks.map((risk, index) => (
            <div
              key={index}
              className="p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 cursor-default group"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                borderTop: '2px solid rgba(59,130,246,0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              }}
            >
              <h3 className="text-lg font-semibold uppercase tracking-widest mb-3" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
                {risk.title}
              </h3>
              <p className="text-base md:text-lg text-gray-100 leading-relaxed">
                {risk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
