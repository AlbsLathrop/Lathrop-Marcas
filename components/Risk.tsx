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
    <section className="bg-navy-light text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-6 mb-12 md:mb-16">
          <p className="label-badge text-accent">El Riesgo de No Actuar</p>
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
              className="glassmorphism p-6 md:p-8 rounded-xl border border-white/10 backdrop-blur-md hover:border-accent/30 transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-4">
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
