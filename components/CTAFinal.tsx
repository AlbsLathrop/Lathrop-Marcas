"use client";

export default function CTAFinal() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '56912345678'
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <section className="bg-navy text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-8">
        {/* Label */}
        <p className="label-badge text-accent justify-center">Siguiente Paso</p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
          Cada día que operas sin registro es un día que le regalas ventaja a
          quien llegue después.
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
            className="inline-flex items-center gap-2 px-8 md:px-12 py-4 md:py-5 bg-white text-navy rounded-lg font-semibold text-base md:text-lg transition-all duration-200 hover:-translate-y-1"
            style={{ boxShadow: '0 12px 32px rgba(255,255,255,0.25)' }}
          >
            Hablar por WhatsApp
            <span>→</span>
          </a>
          <p className="text-sm text-gray-400">Respuesta dentro de 24 h hábiles</p>
        </div>
      </div>
    </section>
  )
}
