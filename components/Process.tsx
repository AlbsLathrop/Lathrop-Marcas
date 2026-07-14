'use client'

import { useState, useEffect, useRef } from 'react'

export default function Process() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index]
              }
              return prev
            })
          }
        },
        { threshold: 0.2 }
      )
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((obs) => obs?.disconnect())
    }
  }, [])

  const steps = [
    {
      number: '1',
      title: 'Búsqueda de disponibilidad',
      time: '[1–3 días hábiles]',
      description:
        'Analizamos el registro nacional y antecedentes relevantes para determinar si tu signo es distintivo y registrable ante el INAPI. Detectamos conflictos antes de que generen fricción comercial.',
    },
    {
      number: '2',
      title: 'Estrategia de clases Niza',
      time: '[1–2 días hábiles]',
      description:
        'Definimos las clases correctas según tu modelo de negocio actual y tu plan de expansión. Una estrategia mal diseñada es una de las decisiones técnicas más costosas.',
    },
    {
      number: '3',
      title: 'Solicitud ante el INAPI',
      time: '[Mismo día de aprobación interna]',
      description:
        'Redactamos y presentamos la solicitud con la documentación exigible en Chile. Nos encargamos del expediente: tú sigues operando.',
    },
    {
      number: '4',
      title: 'Seguimiento del expediente',
      time: '[Durante todo el trámite]',
      badge: 'PROCESO AUTOMATIZADO',
      description:
        'Monitoreamos cada etapa, respondemos requerimientos de forma y fondo, y te informamos con transparencia.',
    },
    {
      number: '5',
      title: 'Vigilancia del registro',
      time: '[Continuo]',
      badge: 'VIGILANCIA POR IA ACTIVA',
      description:
        'Supervisamos publicaciones y movimientos en el entorno del INAPI para anticipar riesgos sobre tu signo. Priorizamos por impacto en tu operación.',
    },
    {
      number: '6',
      title: 'Título de marca en tu poder',
      time: '[Plazo según expediente INAPI]',
      description:
        'Con el título emitido, tu activo intangible queda protegido por diez años renovables en Chile. Te acompañamos en renovaciones y cambios de titular.',
    },
  ]

  return (
    <section id="proceso" className="bg-cream py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Sticky */}
          <div className="space-y-8 md:sticky md:top-32 md:h-fit">
            <div className="space-y-4">
              <p className="label-badge">El Proceso</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy leading-tight">
                De cero a marca registrada.
              </h2>
            </div>

            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
              Sin sorpresas, sin fricción comercial. Cada etapa tiene responsable
              claro: nosotros.
            </p>

            {/* Info Card */}
            <div className="bg-white border rounded-xl p-6 md:p-8" style={{
              borderColor: 'rgba(10,22,40,0.1)',
              borderLeft: '3px solid #1d4ed8',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
            }}>
              <p className="font-semibold text-navy mb-3" style={{ fontSize: '10px', letterSpacing: '0.12em', color: '#1d4ed8' }}>
                PLAZOS INAPI
              </p>
              <p className="font-semibold text-navy mb-2">
                Variable por expediente
              </p>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">
                Depende de clase, antecedentes y observaciones. Lo fijo es
                nuestro estándar de trabajo y seguimiento.
              </p>
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                className={`bg-white border border-gray-200 rounded-xl p-6 md:p-8 transition-all duration-700 ${
                  visibleItems.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }`}
                style={{
                  transitionDelay: visibleItems.includes(index)
                    ? `${index * 100}ms`
                    : '0ms',
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Step Number - Ring Style */}
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs"
                    style={{
                      background: 'transparent',
                      border: '1.5px solid #1d4ed8',
                      color: '#1d4ed8'
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="font-semibold text-navy text-lg">
                      {step.title}
                    </h3>

                    {step.badge && (
                      <div className="inline-block px-2.5 py-1 text-xs font-medium uppercase tracking-wider rounded-full" style={{
                        background: 'rgba(59,130,246,0.1)',
                        color: '#3b82f6'
                      }}>
                        {step.badge}
                      </div>
                    )}

                    <div className="inline-block px-2.5 py-1 text-xs font-medium rounded-full" style={{
                      background: 'rgba(59,130,246,0.1)',
                      color: '#3b82f6'
                    }}>
                      {step.time}
                    </div>

                    <p className="text-sm md:text-base text-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
