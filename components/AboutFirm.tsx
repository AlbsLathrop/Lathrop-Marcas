export default function AboutFirm() {
  return (
    <section className="bg-navy text-white py-16 md:py-24 relative overflow-hidden">
      {/* Grid pattern - subtle */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Label */}
            <p className="label-badge text-accent">Sobre la Firma</p>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              El análisis de riesgo marcario no es un servicio secundario.
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed opacity-90">
                Es la primera decisión técnica de todo negocio que escala. Alberto
                Lathrop fundó esta firma con un principio operativo claro: cada
                marca es un activo intangible que merece gestión técnica, no
                atención genérica.
              </p>
              <p className="text-lg md:text-xl leading-relaxed opacity-90">
                Trabajamos exclusivamente con dueños de negocio que entienden que
                proteger su marca es una inversión patrimonial con retorno
                medible.
              </p>
            </div>

            {/* Checks */}
            <div className="space-y-4 pt-4">
              {[
                'Expedientes y defensa directa ante el INAPI (Chile)',
                '+250 activos intangibles registrados y monitoreados',
                'Marcas para negocios en fase de escalamiento y expansión',
                'Vigilancia marcaria continua, no puntual',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-accent text-xl font-bold flex-shrink-0 mt-1">
                    ✓
                  </span>
                  <span className="text-base md:text-lg leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Blockquote */}
            <div className="border-l-4 border-accent pl-6 py-4 mt-8">
              <p className="italic text-lg md:text-xl leading-relaxed">
                &quot;Registrar una marca sin estrategia de clases es como firmar un
                contrato sin leerlo.&quot;
              </p>
              <p className="text-accent font-semibold mt-4">— ALBERTO LATHROP</p>
            </div>
          </div>

          {/* Right Column - Circular Card */}
          <div className="flex flex-col items-center md:items-end justify-center">
            <div className="w-64 h-64 rounded-full bg-navy-light/60 border-2 border-accent/30 flex flex-col items-center justify-center text-center space-y-4">
              {/* AL Initials - Circular */}
              <p className="font-serif text-6xl font-bold text-blue-400 opacity-60">
                AL
              </p>
              <div className="space-y-1 w-full">
                <p className="text-sm font-medium text-accent uppercase tracking-wider">
                  Abogado Marcario
                </p>
                <p className="text-base font-bold">Alberto Lathrop</p>
                <p className="text-xs text-gray-300">Fundador</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
