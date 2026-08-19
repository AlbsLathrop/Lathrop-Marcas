export default function Process() {
  const steps = [
    { num: 'Paso 1', title: 'Búsqueda de disponibilidad', time: '1–3 días hábiles', desc: 'Analizo el registro nacional para determinar si tu signo es distintivo y registrable, y detecto conflictos antes de que te cuesten caro.' },
    { num: 'Paso 2', title: 'Estrategia de clases Niza', time: '1–2 días hábiles', desc: 'Defino las clases correctas según tu modelo de negocio y tu plan de expansión. Elegirlas mal es de los errores más costosos.' },
    { num: 'Paso 3', title: 'Solicitud ante el INAPI', time: 'Mismo día de aprobación interna', desc: 'Redacto y presento la solicitud con la documentación exigible en Chile. Me encargo del expediente: tú sigues operando.' },
    { num: 'Paso 4', title: 'Seguimiento del expediente', time: 'Durante todo el trámite', desc: 'Monitoreo cada etapa, respondo requerimientos de forma y fondo, y te informo sin que tengas que perseguir el estado.' },
    { num: 'Paso 5', title: 'Vigilancia del registro', time: 'Continuo', desc: 'Superviso los movimientos del INAPI para anticipar riesgos sobre tu marca.' },
    { num: 'Paso 6', title: 'Título de marca en tu poder', time: 'Plazo según expediente', desc: 'Con el título emitido, tu activo queda protegido por diez años renovables. Te acompaño en renovaciones y cambios de titular.' },
  ]

  return (
    <section id="proceso" className="bg-bone py-12 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs font-medium text-azure uppercase tracking-widest mb-3">El Proceso</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-6 leading-tight">
            De cero a marca registrada.
          </h2>
          <p className="text-lg text-graphite max-w-56ch">
            Sin sorpresas, sin fricción comercial. Cada etapa tiene un responsable claro: yo.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info Box */}
          <div className="bg-white border border-bone-line rounded-lg p-6 md:p-8 h-fit">
            <p className="font-mono text-xs text-azure uppercase tracking-widest mb-2">Plazos INAPI</p>
            <h3 className="text-lg font-serif font-bold text-ink mb-2">8 a 14 meses</h3>
            <p className="text-sm text-graphite">El rango depende de la clase, de si alguien se opone y de las observaciones que formule el INAPI. Lo que sí es fijo: mi seguimiento del expediente durante todo el trámite.</p>
          </div>

          {/* Right: Steps with Spine */}
          <div className="relative pl-8">
            {/* Spine vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-bone-line"></div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Node circle */}
                  <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-azure border-2 border-bone"></div>

                  {/* Content */}
                  <div>
                    <p className="font-mono text-xs text-azure font-medium uppercase tracking-widest mb-1">
                      {step.num}
                    </p>
                    <h3 className="text-lg font-serif font-bold text-ink mb-2">
                      {step.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-mono text-xs text-graphite">{step.time}</span>
                    </div>
                    <p className="text-sm text-graphite leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
