"use client";

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Registro de Marca',
      tags: ['Búsqueda', 'Estrategia', 'Solicitud', 'Seguimiento'],
      description: 'Analizo la disponibilidad del signo, defino la estrategia de clases de Niza y gestiono el expediente completo ante el INAPI. Tu activo, protegido desde el inicio.'
    },
    {
      number: '02',
      title: 'Defensa y Oposiciones',
      tags: ['Oposiciones', 'Observaciones', 'Contestación'],
      description: 'Respondo observaciones del INAPI, presento oposiciones contra marcas similares y defiendo tu distintividad frente a terceros.'
    },
    {
      number: '03',
      title: 'Vigilancia Marcaria',
      tags: ['Monitoreo', 'Alertas', 'Acción preventiva'],
      description: 'Monitoreo el registro de marcas que puedan amenazar tu negocio. La expansión exige que tu activo permanezca blindado en todo momento.'
    },
  ]

  return (
    <section id="servicios" className="bg-bone py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-4 mb-12 md:mb-16">
          <p className="font-mono text-xs font-medium text-azure uppercase tracking-widest">Lo que hacemos</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink leading-tight">
            Protección en tres frentes.
          </h2>
          <p className="text-lg text-graphite max-w-56ch">
            Cada servicio está diseñado para dueños de negocio que entienden que su marca es una decisión técnica, no un trámite.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-bone-line border border-bone-line rounded overflow-hidden">
          {services.map((service, idx) => (
            <div key={idx} className="bg-bone p-6 md:p-8 transition-colors hover:bg-white">
              {/* Number + Title */}
              <p className="font-mono text-xs text-azure font-medium uppercase tracking-widest mb-2">
                {service.number}
              </p>
              <h3 className="text-lg md:text-xl font-serif font-bold text-ink mb-3">
                {service.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {service.tags.map((tag, i) => (
                  <span key={i} className="font-mono text-xs text-azure uppercase tracking-widest border border-bone-line rounded px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-graphite leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
