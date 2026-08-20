"use client";

import { useState } from 'react'
import { faqData } from '@/lib/faq-data'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-12 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Sticky */}
          <div className="lg:sticky lg:top-24 lg:self-start h-fit space-y-8">
            <div className="space-y-4">
              <p className="label-badge">Preguntas Frecuentes</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-ink leading-tight">
                Preguntas frecuentes sobre el registro de marcas
              </h2>
            </div>

            <p className="section-subtitle">
              Las dudas que más me llegan, respondidas sin vueltas.
            </p>

            {/* Contact Block */}
            <div className="pt-8 border-t border-slate-200 space-y-4">
              <h3 className="text-lg font-display font-bold text-ink">
                ¿Tu duda no está acá?
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                Escríbeme y te respondo yo.
              </p>
              <a
                href="https://wa.me/61402163749?text=Hola%20Alberto%2C%20tengo%20una%20duda%20sobre%20el%20registro%20de%20mi%20marca."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && typeof (window as any).fbq !== 'undefined') {
                    (window as any).fbq('track', 'Lead');
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 min-h-11 md:min-h-auto bg-ink text-white rounded-[8px] font-medium text-sm hover:bg-opacity-90 transition-all"
              >
                Hablar por WhatsApp →
              </a>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-[8px] overflow-hidden transition-colors duration-200"
                style={{ borderColor: openIndex === index ? 'rgba(59,130,246,0.3)' : 'rgb(229,231,235)' }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 md:px-8 py-3 md:py-5 min-h-11 md:min-h-auto flex items-center justify-between transition-colors duration-200 text-left"
                  style={{
                    background: openIndex === index ? 'rgba(59,130,246,0.04)' : 'transparent'
                  }}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-ink text-base md:text-lg pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-azure text-xl font-light">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openIndex === index ? '1000px' : '0px',
                    opacity: openIndex === index ? 1 : 0,
                  }}
                >
                  <div className="px-6 md:px-8 py-4 md:py-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-base md:text-lg text-text-muted leading-relaxed">
                      {faq.answer}
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
