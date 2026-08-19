export default function Process() {
  const steps = [
    { num: 'Etapa 01', title: 'Antes de presentar', desc: 'Analizo el registro, detecto conflictos y defino en qué clases va tu marca. Es donde se decide si el expediente va a caminar o a chocar.' },
    { num: 'Etapa 02', title: 'Durante el trámite', desc: 'Presento la solicitud y hago el seguimiento completo. Si el INAPI formula observaciones o alguien se opone, defiendo tu marca. Tú sigues operando: no tienes que perseguir nada.' },
    { num: 'Etapa 03', title: 'Después del título', desc: 'Tu marca queda protegida por diez años renovables. Te acompaño en renovaciones y en la vigilancia del registro.' },
  ]

  return (
    <section id="proceso" className="bg-white py-12 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-xs font-medium text-azure uppercase tracking-widest mb-3">El Proceso</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6 leading-tight">
            De estar en peligro a marca registrada y protegida.
          </h2>
          <p className="text-lg text-graphite max-w-56ch text-pretty">
            Sin sorpresas, sin fricción comercial. Cada etapa tiene un responsable claro: yo.
          </p>
        </div>

        {/* PLAZOS Band — Two-part layout */}
        <div className="bg-white border border-slate-200 rounded-[8px] px-6 md:px-8 py-4 md:py-5 mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Label and timeframe */}
            <div>
              <p className="font-mono text-xs text-azure uppercase tracking-widest mb-1">Plazos INAPI</p>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-ink">6 a 12 meses<sup className="text-base text-graphite">*</sup></h3>
            </div>
            {/* Right: Description */}
            <div>
              <p className="text-sm text-graphite leading-relaxed">El rango depende de la clase, de si alguien se opone y de las observaciones que formule el INAPI. Lo que sí es fijo: mi seguimiento del expediente durante todo el trámite.<sup>*</sup></p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-200">
            <p className="text-xs text-graphite/70">
              <sup>*</sup>Plazo referencial. Cada expediente depende de los tiempos del INAPI y no puede garantizarse.
            </p>
          </div>
        </div>

        {/* Steps Grid — 3x2 in desktop, single column in mobile */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-8 lg:gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Step Card */}
              <div className="flex-grow mb-4">
                <p className="font-mono text-xs text-azure font-medium uppercase tracking-widest mb-2">
                  {step.num}
                </p>
                <h3 className="text-lg font-display font-bold text-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-graphite leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Connector (right arrow) — Between etapas */}
              {(idx === 0 || idx === 1) && (
                <div className="text-brass text-lg font-medium mb-4 text-right pr-4">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile — Single column with down arrows */}
        <div className="md:hidden space-y-4">
          {steps.map((step, idx) => (
            <div key={idx}>
              {/* Step Card */}
              <div>
                <p className="font-mono text-xs text-azure font-medium uppercase tracking-widest mb-2">
                  {step.num}
                </p>
                <h3 className="text-lg font-display font-bold text-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-graphite leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Connector (down arrow) */}
              {idx < 2 && (
                <div className="flex justify-center text-brass text-lg font-medium py-2">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
