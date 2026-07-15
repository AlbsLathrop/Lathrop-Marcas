"use client";

export default function VideoTestimonials() {
  const videos = [
    {
      title: 'Nicolás — StartHunt',
      description:
        'INAPI rechazó la marca por una similar. Se apeló ante el TDPI. El tribunal ordenó el registro.',
      tag: 'B2B · CONSULTORÍA',
      videoUrl: '', // Placeholder - to be filled by Alberto
    },
    {
      title: 'Cherry Boom',
      description:
        'Descubrieron en proceso que otra marca ya estaba registrada. Se resolvió. Hoy operan con título vigente.',
      tag: 'ECOMMERCE · PRODUCTO',
      videoUrl: '', // Placeholder - to be filled by Alberto
    },
  ]

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12 md:mb-16">
          <p className="label-badge">Casos Reales</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink">
            Negocios reales. Procesos técnicos reales.
          </h2>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
            No casos hipotéticos — negocios que ya estaban operando y necesitaban
            resolver su marca.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="space-y-4">
              {/* Video Placeholder */}
              <div className="relative bg-ink rounded-xl aspect-video flex items-center justify-center overflow-hidden group">
                {video.videoUrl ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoUrl}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                ) : (
                  <div className="text-center space-y-4">
                    <svg
                      className="w-16 h-16 text-white/50 mx-auto group-hover:text-white/70 transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <p className="text-sm text-white/60">Video por cargar</p>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-ink">
                  {video.title}
                </h3>
                <p className="text-base md:text-lg text-text-muted leading-relaxed">
                  {video.description}
                </p>
                <span className="inline-block px-3 py-1 bg-ink/10 text-ink text-xs font-medium uppercase tracking-wider rounded-full">
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
