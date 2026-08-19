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
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-xs font-medium text-azure uppercase tracking-widest mb-3">El Proceso</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-6 leading-tight">
            De cero a marca registrada.
          </h2>
          <p className="text-lg text-graphite max-w-56ch text-pretty">
            Sin sorpresas, sin fricción comercial. Cada etapa tiene un responsable claro: yo.
          </p>
        </div>

        {/* PLAZOS Band — Full width horizontal */}
        <div className="bg-white border border-bone-line rounded-lg p-6 md:p-8 mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            <div>
              <p className="font-mono text-xs text-azure uppercase tracking-widest mb-2">Plazos INAPI</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-ink">8 a 14 meses</h3>
            </div>
            <div>
              <p className="text-sm text-graphite">El rango depende de la clase, de si alguien se opone y de las observaciones que formule el INAPI. Lo que sí es fijo: mi seguimiento del expediente durante todo el trámite.</p>
            </div>
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
                <h3 className="text-lg font-serif font-bold text-ink mb-3">
                  {step.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs text-graphite">{step.time}</span>
                </div>
                <p className="text-sm text-graphite leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Connector (right arrow) — Only between items in the same row */}
              {(idx === 0 || idx === 1 || idx === 3 || idx === 4) && (
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
                <h3 className="text-lg font-serif font-bold text-ink mb-3">
                  {step.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs text-graphite">{step.time}</span>
                </div>
                <p className="text-sm text-graphite leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Connector (down arrow) */}
              {idx < 5 && (
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
