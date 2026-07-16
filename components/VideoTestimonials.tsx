"use client";

export default function VideoTestimonials() {
  const videos = [
    {
      title: 'Nicolás · StartHunt',
      description: 'El INAPI rechazó la marca por una similar. Presentamos la apelación ante el TDPI y el tribunal ordenó el registro.',
      tag: 'B2B · Consultoría',
    },
    {
      title: 'Cherry Boom',
      description: 'En el análisis detectaron que otra marca ya apuntaba al mismo signo. Ajustamos la estrategia y hoy operan con título vigente.',
      tag: 'Ecommerce · Producto',
    },
  ]

  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <p className="font-mono text-xs font-medium text-azure uppercase tracking-widest">Casos reales</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink leading-tight mb-4">
            Negocios reales. Procesos técnicos reales.
          </h2>
          <p className="text-lg text-graphite max-w-56ch">
            No son casos hipotéticos: negocios que ya operaban y necesitaban resolver su marca.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, idx) => (
            <div key={idx} className="grid grid-cols-[120px_1fr] gap-6 md:gap-8 bg-white border border-bone-line rounded-lg p-6">
              {/* Video Frame */}
              <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-ink to-ink-soft rounded flex items-center justify-center flex-shrink-0 group">
                {/* Corner Brackets */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-azure"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-azure"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-azure"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-azure"></div>

                {/* Play Button */}
                <button className="w-10 h-10 rounded-full border-2 border-white/70 flex items-center justify-center hover:scale-110 transition-transform group-hover:border-white">
                  <div className="w-0 h-0 border-l-[7px] border-l-white/85 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-0.5"></div>
                </button>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-serif font-bold text-ink mb-2">
                  {video.title}
                </h3>
                <p className="text-sm text-graphite leading-relaxed mb-3">
                  {video.description}
                </p>
                <span className="font-mono text-xs text-azure uppercase tracking-widest border border-bone-line rounded px-2 py-1 w-fit">
                  {video.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
