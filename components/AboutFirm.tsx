import Image from 'next/image';

export default function AboutFirm() {
  const features = [
    {
      label: 'Sin honorarios por reproceso',
      desc: 'El segundo intento está incluido en el plan de registro.',
    },
    {
      label: 'Mismo abogado, de principio a fin',
      desc: 'Yo analizo tu marca, la presento y la defiendo.',
    },
    {
      label: 'Criterio técnico, no formulario',
      desc: 'Estrategia de clases pensada para cómo crece tu negocio.',
    },
  ]

  return (
    <section className="bg-ink text-white py-14 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Label */}
        <p className="label-badge text-azure-bright mb-1 md:mb-2 md:mb-4">Sobre la Firma</p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-2 md:mb-4 md:mb-8">
          Vas a hablar conmigo, no con un asistente.
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-8 items-start mb-2 md:mb-4 md:mb-8">
          {/* Text Column — flex width */}
          <div className="space-y-4 md:space-y-6 max-w-prose">
            <p className="text-lg md:text-xl leading-relaxed text-white/80">
              Los estudios grandes te asignan a un junior. Las plataformas online te dan un formulario. Yo analizo tu marca, veo si existen idénticas o similares que puedan jugar en contra, elaboro una estrategia marcaria a futuro, defino en qué clases va, la presento y la defiendo si alguien se opone o si INAPI pone obstáculos. La misma persona de principio a fin.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-white/80">
              Da lo mismo si vendes un producto o prestas un servicio: si tus clientes te encuentran por tu nombre, ese nombre hay que protegerlo.
            </p>

            {/* Blockquote */}
            <div className="border-t border-b border-azure-bright/30 py-4">
              <p className="italic text-lg md:text-xl leading-relaxed text-white/90">
                «Registrar una marca sin estrategia de clases es como firmar un contrato sin leerlo.»
              </p>
              <p className="text-azure-bright font-semibold mt-4 text-sm uppercase tracking-widest">
                — Alberto Lathrop
              </p>
            </div>
          </div>

          {/* Image Column — Circular */}
          <div className="flex justify-center md:justify-start">
            <div className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden border-2 border-azure-bright/30 flex-shrink-0">
              <Image
                src="/images/alberto-retrato.jpg"
                alt="Alberto Lathrop, abogado especialista en marcas"
                width={750}
                height={982}
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 35%' }}
              />
            </div>
          </div>
        </div>

        {/* Features Grid — Moved from WhyUs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/20 rounded overflow-hidden">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white/5 p-4 md:p-6 border-r border-white/10 last:border-r-0">
              <h3 className="text-lg font-display font-bold text-white mb-3">
                {feature.label}
              </h3>
              <p className="text-white/70">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-xs text-white/40 mt-8 text-center">
          *Tasas oficiales de INAPI van aparte.
        </p>
      </div>
    </section>
  )
}
