"use client";

export default function AboutFirm() {
  return (
    <section className="bg-bone py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="space-y-8">
          {/* Label */}
          <p className="label-badge text-azure">Sobre la Firma</p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink leading-tight">
            El análisis de riesgo marcario no es un servicio secundario.
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 max-w-3xl">
            <p className="text-lg md:text-xl leading-relaxed text-graphite">
              La diferencia con mi servicio es que cada marca es el activo más importante de la empresa: exige criterio técnico y especializado, no atención genérica y rápida.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-graphite">
              Trabajo solo con dueños de negocio que entienden que proteger su marca es{' '}
              <span style={{ color: '#2D5A8C' }}>una inversión patrimonial con retorno medible</span>. Es la cara y base de su empresa.
            </p>
          </div>

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
      </div>
    </section>
  )
}
