export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Registro de Marca',
      tags: ['BÚSQUEDA', 'ESTRATEGIA', 'SOLICITUD', 'SEGUIMIENTO'],
      description:
        'Analizamos la disponibilidad del signo, definimos la estrategia de clases de Niza y gestionamos el expediente completo ante el INAPI. Tu activo intangible, protegido desde el inicio.',
    },
    {
      number: '02',
      title: 'Defensa y Oposiciones',
      tags: ['OBJECIONES', 'OPOSICIONES', 'CONTESTACIÓN'],
      description:
        'Respondemos observaciones y requerimientos del INAPI, presentamos oposiciones contra marcas similares y defendemos tu posición frente a terceros que pretendan erosionar tu distintividad.',
    },
    {
      number: '03',
      title: 'Vigilancia Marcaria',
      tags: ['MONITOREO', 'ALERTAS', 'ACCIÓN PREVENTIVA'],
      description:
        'Monitoreamos el registro de nuevas marcas que puedan representar una amenaza para tu negocio. La expansión requiere que tu activo permanezca blindado en todo momento.',
    },
  ]

  return (
    <section id="servicios" className="bg-cream py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-4 mb-12 md:mb-16">
          <p className="label-badge">Lo que hacemos</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy">
            Protección en tres frentes estratégicos.
          </h2>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl">
            Cada servicio está diseñado para dueños de negocio que entienden que
            una marca es una decisión técnica, no un trámite.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 py-8 px-4 -mx-4 rounded-lg transition-colors duration-200 group-hover:bg-blue-50">
                {/* Number */}
                <span className="text-6xl md:text-7xl font-serif font-bold text-navy/20 flex-shrink-0">
                  {service.number}
                </span>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy">
                    {service.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full uppercase tracking-widest border"
                        style={{
                          background: 'rgba(10,22,40,0.06)',
                          color: '#1a2744',
                          borderColor: 'rgba(10,22,40,0.1)',
                          fontSize: '10px'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-base md:text-lg text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Divider - except last */}
              {index < services.length - 1 && (
                <div className="border-b border-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
