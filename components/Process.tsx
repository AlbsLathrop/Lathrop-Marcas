"use client";

export default function Process() {
  const steps = [
    { num: 'Paso 1', title: 'Búsqueda de disponibilidad', time: '1–3 días hábiles', desc: 'Analizamos el registro nacional y antecedentes para determinar si tu signo es distintivo y registrable. Detectamos conflictos antes de que generen fricción comercial.' },
    { num: 'Paso 2', title: 'Estrategia de clases Niza', time: '1–2 días hábiles', desc: 'Definimos las clases correctas según tu modelo de negocio y tu plan de expansión. Una estrategia mal diseñada es una de las decisiones técnicas más costosas.' },
    { num: 'Paso 3', title: 'Solicitud ante el INAPI', time: 'Mismo día de aprobación interna', desc: 'Redactamos y presentamos la solicitud con la documentación exigible en Chile. Nos encargamos del expediente: tú sigues operando.' },
    { num: 'Paso 4', title: 'Seguimiento del expediente', time: 'Durante todo el trámite', badge: 'Proceso automatizado', desc: 'Monitoreamos cada etapa, respondemos requerimientos de forma y fondo, y te informamos sin que tengas que perseguir el estado.' },
    { num: 'Paso 5', title: 'Vigilancia del registro', time: 'Continuo', badge: 'Vigilancia por IA activa', desc: 'Supervisamos publicaciones y movimientos en el entorno del INAPI para anticipar riesgos sobre tu signo. Priorizamos por impacto en tu operación.' },
    { num: 'Paso 6', title: 'Título de marca en tu poder', time: 'Plazo según expediente', desc: 'Con el título emitido, tu activo queda protegido por diez años renovables. Te acompañamos en renovaciones y cambios de titular.' },
  ]

  return (
    <section id="proceso" className="bg-bone py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs font-medium text-azure uppercase tracking-widest mb-3">El Proceso</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-6 leading-tight">
            De cero a marca registrada.
          </h2>
          <p className="text-lg text-graphite max-w-56ch">
            Sin sorpresas, sin fricción comercial. Cada etapa tiene un responsable claro: nosotros.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info Box */}
          <div className="bg-white border border-bone-line rounded-lg p-6 md:p-8 h-fit">
            <p className="font-mono text-xs text-azure uppercase tracking-widest mb-2">Plazos INAPI</p>
            <h4 className="text-lg font-serif font-bold text-ink mb-2">Variable por expediente</h4>
            <p className="text-sm text-graphite">Depende de clase, antecedentes y observaciones. Lo fijo es nuestro estándar de trabajo y seguimiento.</p>
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
                      {step.badge && (
                        <span className="font-mono text-xs text-azure uppercase tracking-widest border border-bone-line rounded px-2 py-1">
                          {step.badge}
                        </span>
                      )}
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
