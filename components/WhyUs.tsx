export default function WhyUs() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Card Container */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <svg
              className="w-16 h-16 text-accent"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
          </div>

          {/* Header */}
          <div className="text-center space-y-4">
            <p className="label-badge text-center justify-center">Por Qué Elegirnos</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">
              Un abogado especialista. Ningún formulario genérico.
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-text-muted leading-relaxed text-center">
            Registrar una marca no es completar un formulario en línea: es
            definir qué proteges, cómo lo proteges y contra qué. Cada expediente
            requiere criterio técnico, no procesamiento masivo.
          </p>

          {/* Guarantee Section */}
          <div className="border-t border-b border-gray-200 py-8 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="inline-block px-3 py-1 bg-blue-100 text-accent text-xs font-medium uppercase tracking-wider rounded-full">
                Incluido en Base
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy text-center">
              Garantía de segundo intento
            </h3>
            <p className="text-lg text-text-muted leading-relaxed text-center">
              Si INAPI rechaza en el primer intento, volvemos a presentar sin
              cobrar honorarios nuevamente. Aplicamos los ajustes técnicos
              necesarios para maximizar la probabilidad de éxito. Tu marca no
              queda a medias por un ajuste técnico.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <div className="text-center space-y-2">
              <p className="text-2xl md:text-3xl font-bold text-navy">✓</p>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">
                Sin costo adicional de honorarios
              </p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-2xl md:text-3xl font-bold text-navy">🕐</p>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">
                Mismo equipo técnico
              </p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-2xl md:text-3xl font-bold text-navy">🛡</p>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">
                Aplica al mismo signo y clase
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <p className="text-center text-sm text-text-muted">
            *Tasas oficiales de INAPI van aparte.
          </p>
        </div>
      </div>
    </section>
  )
}
