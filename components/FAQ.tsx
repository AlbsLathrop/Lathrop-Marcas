"use client";

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '¿Cuánto demora un registro de marca en Chile ante el INAPI?',
      answer:
        'El plazo depende de la complejidad del expediente, la clase y si aparecen antecedentes u observaciones. No hay un número fijo: lo que sí controlamos es la calidad de la solicitud y la respuesta a cada requerimiento para no alargar etapas evitables. En el informe marcario o al iniciar el proceso te explicamos el escenario real de tu signo.',
    },
    {
      question:
        '¿Por qué es una decisión técnica y no un trámite administrativo?',
      answer:
        'Clases de Niza, redacción del signo, alcance del titular y estrategia frente a antecedentes definen qué tan útil es tu título en la práctica. Una solicitud mal planteada puede dejarte expuesto en canales digitales, contratos o expansión. Eso es criterio de propiedad industrial, no rellenar formularios.',
    },
    {
      question: '¿Qué hacemos si ya existe una marca parecida a la mía?',
      answer:
        'Primero, mapa de riesgo con búsqueda profesional y criterio de confundibilidad. Después: oposición, negociación de convivencia o ajuste de estrategia según el caso. El dueño de negocio necesita una recomendación clara, no una lista de trámites posibles.',
    },
    {
      question:
        '¿Alcanza con registrar solo en Chile o conviene el extranjero?',
      answer:
        'El registro en Chile protege el territorio nacional. Si vendes online, licencias o expansión regional están en el plan, conviene alinear Chile con Madrid o vías directas por país. La decisión es de negocio; nosotros la traducimos a plan de PI.',
    },
    {
      question: '¿Cómo impacta la marca registrada en la valuación del negocio?',
      answer:
        'Un activo intangible con título vigente ordena balances, due diligence e inversiones. En venta, fusión o ronda, la marca registrada reduce fricción comercial y sube confianza. Sin registro, el valor queda en narrativa, no en documento.',
    },
    {
      question: '¿Solo registro inicial o también renovaciones y cambios?',
      answer:
        'Ciclo completo: solicitud, seguimiento, renovaciones (cada diez años en Chile), vigilancia, cesiones y licencias. El acompañamiento es continuo para quien ya factura y no puede permitirse sorpresas en el registro.',
    },
  ]

  return (
    <section id="faq" className="bg-bone py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="label-badge">Preguntas Frecuentes</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink leading-tight">
                Criterio senior antes de firmar nada.
              </h2>
            </div>

            <p className="section-subtitle">
              Si tu caso no encaja aquí, lo decimos. Las primeras conversaciones
              están sujetas a calificación: trabajamos con dueños de negocio que
              ya operan y necesitan orden en su propiedad industrial.
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
