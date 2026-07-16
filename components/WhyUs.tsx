"use client";

export default function WhyUs() {
  const features = [
    {
      label: 'Sin honorarios por reproceso',
      desc: 'El segundo intento está incluido en el plan de registro.',
    },
    {
      label: 'Mismo abogado, de principio a fin',
      desc: 'Yo analizo tu marca, la presento y la defiendo.',
    },
    {
      label: 'Criterio técnico, no formulario',
      desc: 'Estrategia de clases pensada para cómo crece tu negocio.',
    },
  ]

  return (
    <section className="bg-ink text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <p className="font-mono text-xs font-medium text-brass uppercase tracking-widest">Por qué trabajar conmigo</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">
            Un abogado especialista. Ningún formulario genérico.
          </h2>
          <p className="text-lg text-white/70 max-width-56ch">
            Registrar una marca no es completar un formulario en línea: es definir qué proteges, cómo lo proteges y contra qué. Cada expediente exige criterio técnico, no procesamiento masivo.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded overflow-hidden">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-ink p-6 md:p-8">
              <h4 className="text-lg font-serif font-bold text-bone mb-3">
                {feature.label}
              </h4>
              <p className="text-white/70">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-xs text-white/40 mt-8 text-center">
          *Tasas oficiales de INAPI van aparte.
        </p>
      </div>
    </section>
  )
}
