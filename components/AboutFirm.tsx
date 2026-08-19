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
    <section className="bg-ink text-white py-10 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Label */}
        <p className="label-badge text-azure-bright mb-8">Sobre la Firma</p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-12">
          Vas a hablar conmigo, no con un asistente.
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-12">
          {/* Text Column — 2/3 width */}
          <div className="md:col-span-2 space-y-6 max-w-prose">
            <p className="text-lg md:text-xl leading-relaxed text-white/80">
              Los estudios grandes te asignan a un junior. Las plataformas online te dan un formulario. Yo analizo tu marca, defino en qué clases va, la presento y la defiendo si alguien se opone. La misma persona de principio a fin.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-white/80">
              Da lo mismo si vendes un producto o prestas un servicio: si tus clientes te encuentran por tu nombre, ese nombre hay que protegerlo.
            </p>

            {/* Blockquote */}
            <div className="border-t border-b border-azure-bright/30 py-6">
              <p className="italic text-lg md:text-xl leading-relaxed text-white/90">
                «Registrar una marca sin estrategia de clases es como firmar un contrato sin leerlo.»
              </p>
              <p className="text-azure-bright font-semibold mt-4 text-sm uppercase tracking-widest">
                — Alberto Lathrop
              </p>
            </div>
          </div>

          {/* Image Column — 1/3 width */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/alberto-retrato.jpg"
              alt="Alberto Lathrop, abogado especialista en marcas"
              width={750}
              height={982}
              loading="lazy"
              className="w-full max-w-[260px] md:max-w-[340px] object-cover object-center"
              style={{ aspectRatio: '750/982' }}
            />
          </div>
        </div>

        {/* Features Grid — Moved from WhyUs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/20 rounded overflow-hidden">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white/5 p-6 md:p-8 border-r border-white/10 last:border-r-0">
              <h3 className="text-lg font-serif font-bold text-white mb-3">
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
