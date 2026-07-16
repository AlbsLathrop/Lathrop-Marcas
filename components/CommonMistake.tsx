"use client";

import { useRef, useEffect, useState } from 'react'

export default function CommonMistake() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-bone py-28 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <p className="label-badge">El error más común</p>

            <h2 className="heading-2 text-wrap balance">
              Inviertes en todo lo que hace crecer tu negocio. ¿Y en lo que lo sostiene?
            </h2>

            <p className="paragraph">
              Ads, cursos, mentorías, un sitio nuevo, más inventario. Todo suma — pero
              todo se apoya en una sola cosa: el nombre con el que vendes.
            </p>

            <p className="paragraph">
              Si esa marca no es legalmente tuya, estás construyendo sobre terreno
              prestado. No es un gasto más de la lista: es el activo que te posiciona,
              el que la gente recuerda y el que le da valor real al negocio cuando
              quieras escalar, vender o levantar capital.
            </p>

            {/* Kicker */}
            <div className="space-y-4 border-l-4 border-azure pl-6 py-4">
              <p className="heading-3 text-ink">
                Registrar tu marca no es un pendiente.
              </p>
              <p className="heading-3 text-ink">
                Es asegurar la base antes de seguir subiendo.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-medium rounded-lg transition-all duration-300 bg-ink text-bone hover:bg-azure"
            >
              Asegurar mi marca →
            </a>
          </div>

          {/* Right Column - Diagram */}
          <div ref={ref} className="space-y-6">
            <p className="label-badge">En lo que inviertes hoy</p>

            {/* Investment Bars */}
            <div className="space-y-3">
              {[
                'Publicidad y Ads',
                'Cursos y mentorías',
                'Sitio web y branding',
                'Inventario y operación'
              ].map((label) => (
                <div
                  key={label}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${['Publicidad', 'Cursos', 'Sitio', 'Inventario'].indexOf(label.split(' ')[0])}00ms`
                  }}
                >
                  <div className="border-b border-bone-line pb-3">
                    <p className="text-sm font-medium text-graphite">{label}</p>
                    <div className="mt-2 h-8 rounded bg-white border border-bone-line"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Foundation Block */}
            <div
              className={`transition-all duration-700 rounded-xl p-6 text-center space-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: '400ms',
                background: 'linear-gradient(135deg, #0B1A2F 0%, #14263D 100%)',
                border: '1.5px solid #2D5A8C',
                boxShadow: '0 8px 24px rgba(45,90,140,0.2)'
              }}
            >
              <p className="heading-3 text-bone">Tu marca registrada</p>
              <p className="label-badge text-azure-bright">La base que sostiene todo lo demás</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
