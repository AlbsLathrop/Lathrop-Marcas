export default function Reviews() {
  const reviews = [
    {
      stars: 5,
      text: '«Desde la comunicación clara y constante hasta la estrategia personalizada y efectiva. Me orientaron y ayudaron en todo momento. 100% recomendados.»',
      name: 'Lester Acuña',
      verified: true,
    },
    {
      stars: 5,
      text: '«Excelente asesoría legal. Fue clave la fijación en los pequeños detalles de mi situación por parte de Alberto, que me permitieron tomar una decisión acertada y estratégica.»',
      name: 'Pedro Pablo Rojas Muñoz',
      verified: true,
    },
    {
      stars: 5,
      text: '«El equipo demostró gran experiencia en propiedad intelectual, resolviendo mis dudas de manera clara y eficiente. Me sentí respaldado en cada etapa con Alberto.»',
      name: 'Ignacio Jasen',
      verified: true,
    },
  ]

  return (
    <section className="bg-ink text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <p className="font-mono text-xs font-medium text-brass uppercase tracking-widest">Reseñas</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            Lo que dicen quienes ya registraron.
          </h2>
        </div>

        {/* Rating Header */}
        <div className="flex items-baseline gap-3 mb-12">
          <span className="text-4xl font-serif font-bold text-white">4.8/5</span>
          <span className="text-gold text-lg tracking-wider">★★★★★</span>
          <span className="font-mono text-sm text-white/70">en Google</span>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col py-6 border-b md:border-b-0 md:border-r md:pr-8 last:border-r-0">
              {/* Stars */}
              <div className="text-gold text-base tracking-wider mb-4">
                {'★'.repeat(review.stars)}
              </div>

              {/* Text */}
              <p className="text-base text-white leading-relaxed mb-6 flex-grow">
                {review.text}
              </p>

              {/* Name */}
              <p className="text-sm font-medium text-white mb-1">
                {review.name}
              </p>

              {/* Verified Badge */}
              <p className="font-mono text-xs text-white/60">
                Reseña verificada · Google
              </p>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <a href="https://maps.app.goo.gl/5JEzPc6exAVvHPUTA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brass font-medium hover:text-white transition-colors">
            Ver todas las opiniones en Google →
          </a>
        </div>
      </div>
    </section>
  )
}
