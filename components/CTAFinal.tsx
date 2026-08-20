"use client";

import Image from 'next/image'
import LeadForm from './LeadForm'

export default function CTAFinal() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '61402163749'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola%20Alberto%2C%20quiero%20conversar%20sobre%20mi%20marca.`

  return (
    <section className="bg-ink text-white py-1 md:py-8">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-8">
        {/* Logo Signature */}
        <div className="flex justify-center mb-2 md:mb-4 md:mb-8">
          <Image
            src="/images/lathrop-logo-light.png"
            width={462}
            height={160}
            className="h-12 md:h-12 w-auto opacity-70"
            alt="Lathrop Marcas"
          />
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
          Revisemos tu caso antes de que alguien más lo haga por ti.
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          La primera conversación es sin compromiso.
        </p>

        {/* CTA Button */}
        <div className="space-y-4 pt-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined' && typeof (window as any).fbq !== 'undefined') {
                (window as any).fbq('track', 'Lead');
              }
            }}
            className="inline-flex items-center justify-center gap-2 px-8 md:px-12 py-1 md:py- min-h-11 md:min-h-auto bg-white text-ink rounded-[8px] font-semibold text-base md:text-lg transition-all duration-200 hover:-translate-y-1"
            style={{ boxShadow: '0 12px 32px rgba(255,255,255,0.25)' }}
          >
            Hablar por WhatsApp
            <span>→</span>
          </a>
          <p className="text-sm text-gray-400">Respuesta dentro de 24 h hábiles</p>
        </div>

        {/* Alternative Lead Form */}
        <div className="pt-8 border-t border-white/10 space-y-6">
          <p className="text-sm text-gray-300">
            ¿Prefieres que te contacte yo? Déjame tus datos:
          </p>
          <div className="flex justify-center">
            <LeadForm variant="dark" />
          </div>
        </div>
      </div>
    </section>
  )
}
