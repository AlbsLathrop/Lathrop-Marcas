export default function Pricing() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '56912345678'
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <section id="pricing" className="bg-navy py-16 md:py-24 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12 md:mb-20">
          <p className="label-badge text-accent">La Inversión</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Claridad total antes de empezar.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Cada etapa tiene un costo claro y un resultado concreto. Sin
            sorpresas, sin letra chica.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 - Informe */}
          <div className="bg-navy-light rounded-xl p-8 border border-white/10">
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-medium uppercase tracking-wider rounded-full">
                  Punto de Partida
                </span>
                <h3 className="text-2xl font-serif font-bold mt-4">
                  Informe Marcario
                </h3>
                <p className="text-sm text-gray-300 mt-2">
                  Se descuenta del servicio completo si contratas
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-4xl font-bold">$79.000</p>
                <p className="text-sm text-gray-400">
                  Entrega en 3–5 días hábiles
                </p>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold text-gray-300">
                  Ideal para:
                </p>
                <p className="text-base leading-relaxed">
                  Antes de invertir en el proceso completo
                </p>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold text-gray-300">INCLUYE:</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Búsqueda en software especializado</li>
                  <li>✓ Identificación de marcas idénticas o similares</li>
                  <li>✓ Detección de uso en web y redes sociales</li>
                  <li>✓ Análisis de riesgo marcario técnico</li>
                  <li>✓ Conclusiones de abogado especialista</li>
                  <li>✓ Recomendación clara y accionable</li>
                </ul>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-white text-navy font-medium rounded-lg hover:bg-gray-200 transition-colors text-center"
              >
                Solicitar informe →
              </a>
            </div>
          </div>

          {/* Card 2 - Registro (Highlighted) */}
          <div className="bg-accent rounded-xl p-8 transform md:scale-105 relative z-10">
            <div className="space-y-6 text-navy">
              <div>
                <span className="inline-block px-3 py-1 bg-white/30 text-navy text-xs font-medium uppercase tracking-wider rounded-full">
                  Más Solicitado
                </span>
                <h3 className="text-2xl font-serif font-bold mt-4">
                  Registro de Marca
                </h3>
                <p className="text-sm text-navy/70 mt-2">
                  (1 clase) + tasas INAPI aparte
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-4xl font-bold">$319.000</p>
                <p className="text-sm text-navy/70">
                  Clase adicional: $90.000
                </p>
              </div>

              <div className="space-y-3 border-t border-navy/20 pt-6">
                <p className="text-sm font-semibold">Ideal para:</p>
                <p className="text-base leading-relaxed">
                  Ecommerce y servicios con proyección nacional
                </p>
              </div>

              <div className="space-y-3 border-t border-navy/20 pt-6">
                <p className="text-sm font-semibold">INCLUYE:</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Todo lo del Informe Marcario</li>
                  <li>✓ Estrategia de clases Niza</li>
                  <li>✓ Redacción y presentación ante INAPI</li>
                  <li>✓ Seguimiento completo del expediente</li>
                  <li>✓ Respuesta a requerimientos</li>
                  <li>✓ Defensa ante oposiciones</li>
                  <li>✓ Vigilancia marcaria 12 meses</li>
                  <li>✓ Garantía de segundo intento</li>
                </ul>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-navy text-white font-medium rounded-lg hover:bg-text-primary transition-colors text-center"
              >
                Iniciar el proceso →
              </a>
            </div>
          </div>

          {/* Card 3 - Protección Integral */}
          <div className="bg-navy-light rounded-xl p-8 border border-white/10">
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-medium uppercase tracking-wider rounded-full">
                  Recomendado
                </span>
                <h3 className="text-2xl font-serif font-bold mt-4">
                  Protección Integral
                </h3>
                <p className="text-sm text-gray-300 mt-2">
                  Honorarios según complejidad del caso
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-4xl font-bold">Solicitar propuesta</p>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold text-gray-300">
                  Ideal para:
                </p>
                <p className="text-base leading-relaxed">
                  Marcas con alta inversión en Ads o planes de expansión
                  regional
                </p>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold text-gray-300">INCLUYE:</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Todo lo del Registro de Marca</li>
                  <li>✓ Vigilancia marcaria 24 meses</li>
                  <li>✓ Alertas de marcas similares</li>
                  <li>✓ Asesoría en cesiones y licencias</li>
                  <li>✓ Estrategia internacional</li>
                  <li>✓ Primera renovación acompañada</li>
                </ul>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-white text-navy font-medium rounded-lg hover:bg-gray-200 transition-colors text-center"
              >
                Solicitar propuesta →
              </a>
            </div>
          </div>
        </div>

        {/* Vigilancia Section */}
        <div className="bg-navy-light rounded-2xl p-8 md:p-12 border border-white/10">
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
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-gray-400 pt-4">
                *No incluye tasas oficiales ni procesos judiciales.
              </p>
            </div>

            {/* Right - Pricing Options */}
            <div className="space-y-4">
              {/* Option 1 */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <p className="text-3xl font-bold mb-2">$8.000</p>
                <p className="text-gray-300 mb-4">Cancela cuando quieras</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2 bg-white text-navy font-medium rounded-lg hover:bg-gray-200 transition-colors text-center text-sm"
                >
                  Hablar por WhatsApp →
                </a>
              </div>

              {/* Option 2 - Highlighted */}
              <div className="bg-accent rounded-xl p-6 border border-accent">
                <span className="inline-block px-3 py-1 bg-navy text-white text-xs font-medium uppercase tracking-wider rounded-full mb-3">
                  Mejor Opción
                </span>
                <p className="text-3xl font-bold text-navy mb-2">$72.000</p>
                <p className="text-navy/80 mb-4">Ahorras 2 meses - 25% descuento</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2 bg-navy text-white font-medium rounded-lg hover:bg-text-primary transition-colors text-center text-sm"
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
