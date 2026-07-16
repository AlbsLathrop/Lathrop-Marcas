"use client";

export default function VideoTestimonials() {
  const videos = [
    {
      name: 'Cherry Boom',
      description: 'En el análisis detecté que otra marca ya apuntaba al mismo signo. Ajusté la estrategia y hoy operan con título vigente.',
      tag: 'Ecommerce · Producto',
      videoId: 'PicBZqTpIu4',
      url: 'https://youtube.com/shorts/PicBZqTpIu4',
    },
    {
      name: 'StartHunt',
      description: 'El INAPI rechazó la marca por una similar. Presenté la apelación ante el TDPI y el tribunal ordenó el registro.',
      tag: 'B2B · Consultoría',
      videoId: 'GFLXJF8Pk7c',
      url: 'https://youtube.com/shorts/GFLXJF8Pk7c',
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, idx) => (
            <a
              key={idx}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="vid-card group cursor-pointer"
            >
              {/* Video Frame */}
              <div className="vid-frame relative w-full aspect-video bg-ink rounded-lg overflow-hidden mb-4">
                {/* Thumbnail Image */}
                <img
                  src={`https://i.ytimg.com/vi/${video.videoId}/maxresdefault.jpg`}
                  alt={video.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(1)',
                    transition: 'filter 0.3s ease, transform 0.3s ease',
                  }}
                  className="group-hover:grayscale-0 group-hover:scale-104"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0)';
                    e.currentTarget.style.transform = 'scale(1.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(1)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />

                {/* Corner Brackets */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-azure-bright"></div>
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-azure-bright"></div>
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-azure-bright"></div>
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-azure-bright"></div>

                {/* Play Button */}
                <div className="play absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-white/70 flex items-center justify-center group-hover:border-white transition-all group-hover:scale-110">
                    <div className="w-0 h-0 border-l-[8px] border-l-white/85 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-serif font-bold text-ink">
                  {video.name}
                </h3>
                <p className="text-sm text-graphite leading-relaxed">
                  {video.description}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-mono text-xs text-azure uppercase tracking-widest border border-bone-line rounded px-2 py-1">
                    {video.tag}
                  </span>
                  <span className="text-sm font-medium text-ink group-hover:text-azure transition-colors">
                    Ver testimonio →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .group-hover\:grayscale-0:hover {
          filter: grayscale(0);
        }

        .group-hover\:scale-104:hover {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  )
}
