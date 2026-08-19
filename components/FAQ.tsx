"use client";

import { useState, useEffect } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '¿Cuánto cuesta registrar una marca en Chile?',
      answer:
        'Hay dos costos distintos y conviene no mezclarlos. Las tasas oficiales del INAPI son fijas y las cobra el Estado: 1 UTM por clase al presentar la solicitud y 2 UTM por clase cuando la marca se concede. Aparte van los honorarios del abogado, que dependen de la complejidad del caso. En la propuesta te llegan separados.',
    },
    {
      question: '¿Cuánto demora registrar una marca en el INAPI?',
      answer:
        'Depende del expediente. Si nadie se opone y el INAPI no formula observaciones, es el escenario más rápido. Una oposición o una observación de fondo agrega meses. Es la razón por la que la búsqueda previa importa: los plazos se alargan por conflictos que se podían anticipar.',
    },
    {
      question: '¿Cómo sé si una marca ya está registrada?',
      answer:
        'El INAPI tiene una búsqueda pública, pero muestra coincidencias exactas y deja fuera lo que más problema causa: nombres parecidos, marcas que sin ser idénticas son confundibles, y registros en clases relacionadas. Ese análisis es el que determina si vale la pena presentar.',
    },
    {
      question: '¿Puedo registrar el nombre que ya estoy usando?',
      answer:
        'En general sí, siempre que sea distintivo y que nadie lo haya inscrito antes en tu rubro. Usarlo hace años no te da prioridad frente a quien lo inscriba primero. Si ya lo usas y no está registrado, es más urgente, no menos.',
    },
    {
      question: '¿Qué pasa si alguien registra mi nombre antes que yo?',
      answer:
        'Puede exigirte que dejes de usarlo, aunque lleves años operando. Hay caminos para defenderse según el caso, pero todos son más caros y más lentos que haber registrado a tiempo.',
    },
    {
      question: '¿Se puede registrar una marca sin abogado?',
      answer:
        'Legalmente sí. El problema no es presentar, es qué presentas: elegir mal las clases, redactar mal la cobertura o no detectar una marca anterior confundible lleva a un rechazo. Y el rechazo no devuelve las tasas pagadas.',
    },
    {
      question: '¿Qué son las clases de Niza y cuántas necesito?',
      answer:
        'Es la clasificación internacional que agrupa productos y servicios en 45 categorías. Tu marca queda protegida solo en las clases donde la inscribes. La decisión de cuántas y cuáles es estratégica: pocas te dejan desprotegido, demasiadas encarecen sin agregar cobertura útil.',
    },
    {
      question: '¿Cuánto dura el registro de una marca?',
      answer:
        'Diez años desde la concesión, renovables indefinidamente por períodos iguales. La renovación tiene plazo: si se deja vencer, la marca caduca y el nombre queda disponible para que lo tome cualquiera.',
    },
    {
      question: '¿Puedo registrar solo el logo, o conviene también el nombre?',
      answer:
        'Son protecciones distintas. El nombre solo (marca denominativa) protege las palabras en cualquier tipografía. El logo (figurativa o mixta) protege esa imagen puntual. Si rediseñas el logo, la protección del nombre sigue; al revés no funciona igual.',
    },
    {
      question: '¿Qué pasa si el INAPI rechaza mi marca?',
      answer:
        'Depende del motivo. Si es una observación de forma o de fondo, se contesta dentro de plazo. Si hay rechazo, se puede apelar ante el TDPI. He dado vuelta fallos en esa instancia. Lo que no se puede es dejar pasar los plazos: ahí se acaba el expediente.',
    },
    {
      question: '¿Necesito tener empresa para registrar una marca?',
      answer:
        'No. Puede registrar una persona natural con RUT o una empresa. Sí conviene pensar a nombre de quién queda, porque el titular es quien tiene el derecho y cambiarlo después es un trámite aparte.',
    },
    {
      question: '¿Sirve registrar la marca en Chile si vendo al extranjero?',
      answer:
        'El registro chileno protege en Chile. Si vendes o planeas vender fuera, hay que mirar los países donde operas, y existen vías que permiten extender la protección desde la solicitud chilena dentro de cierto plazo.',
    },
  ]

  // Generate JSON-LD structured data
  useEffect(() => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }

    // Add or update the script tag
    let scriptTag = document.getElementById('faq-schema') as HTMLScriptElement | null
    if (!scriptTag) {
      scriptTag = document.createElement('script') as HTMLScriptElement
      scriptTag.id = 'faq-schema'
      scriptTag.type = 'application/ld+json'
      scriptTag.textContent = JSON.stringify(faqSchema)
      document.head.appendChild(scriptTag)
    } else {
      scriptTag.textContent = JSON.stringify(faqSchema)
    }
  }, [])

  return (
    <section id="faq" className="bg-bone py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="label-badge">Preguntas Frecuentes</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink leading-tight">
                Preguntas frecuentes sobre el registro de marcas
              </h2>
            </div>

            <p className="section-subtitle">
              Las dudas que más me llegan, respondidas sin vueltas.
            </p>
          </div>

          {/* Right Column - Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden transition-colors duration-200"
                style={{ borderColor: openIndex === index ? 'rgba(59,130,246,0.3)' : 'rgb(229,231,235)' }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 md:px-8 py-4 md:py-5 flex items-center justify-between transition-colors duration-200 text-left"
                  style={{
                    background: openIndex === index ? 'rgba(59,130,246,0.04)' : 'transparent'
                  }}
                >
                  <span className="font-semibold text-ink text-base md:text-lg pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-azure text-xl font-light">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 md:px-8 py-4 md:py-5 bg-gray-50 border-t border-gray-200 transition-all duration-300">
                    <p className="text-base md:text-lg text-text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
