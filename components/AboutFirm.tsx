import Image from 'next/image';

export default function AboutFirm() {
  return (
    <section className="bg-bone py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Label */}
        <p className="label-badge text-azure mb-8">Sobre la Firma</p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink leading-tight mb-12">
          Vas a hablar conmigo, no con un ejecutivo de cuentas.
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Text Column */}
          <div className="space-y-6 max-w-prose">
            <p className="text-lg md:text-xl leading-relaxed text-graphite">
              Los estudios grandes te asignan a un junior. Las plataformas online te dan un formulario. Yo analizo tu marca, defino en qué clases va, la presento y la defiendo si alguien se opone. La misma persona de principio a fin.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-graphite">
              Trabajo con dueños de negocio que entienden que su nombre es un activo, no un trámite. Da lo mismo si vendes un producto o prestas un servicio: si tus clientes te encuentran por tu nombre, ese nombre hay que protegerlo.
            </p>

            {/* Blockquote */}
            <div className="border-l-4 border-azure pl-6 py-4">
              <p className="italic text-lg md:text-xl leading-relaxed text-ink">
                «Registrar una marca sin estrategia de clases es como firmar un contrato sin leerlo.»
              </p>
              <p className="text-azure font-semibold mt-4 text-sm uppercase tracking-widest">
                — Alberto Lathrop
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex justify-center">
            <Image
              src="/images/alberto-retrato.jpg"
              alt="Alberto Lathrop, abogado especialista en marcas"
              width={750}
              height={982}
              loading="lazy"
              className="w-full max-h-[600px] object-cover object-center"
              style={{ aspectRatio: '750/982' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
