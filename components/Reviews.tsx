"use client";

export default function Reviews() {
  const reviews = [
    {
      stars: 5,
      text: '«Estrategia personalizada, profesionalismo y trato humano. Gran compromiso. 100% recomendados.»',
      name: 'Lester Acuña',
      verified: true,
    },
    {
      stars: 5,
      text: '«Trato directo con el abogado, no con un asistente. Resolvió una observación que parecía trabar todo el registro.»',
      name: '[Nombre real]',
      verified: false,
    },
    {
      stars: 5,
      text: '«Precios claros y sin sorpresas con las tasas. Recomendado para quien va en serio con su marca.»',
      name: '[Nombre real]',
      verified: false,
    },
  ]

  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <p className="font-mono text-xs font-medium text-azure uppercase tracking-widest">Reseñas</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink leading-tight">
            Lo que dicen quienes ya registraron.
          </h2>
        </div>

        {/* Rating Header */}
        <div className="flex items-baseline gap-3 mb-12">
          <span className="text-4xl font-serif font-bold text-ink">4.9/5</span>
          <span className="text-gold text-lg tracking-wider">★★★★★</span>
          <span className="font-mono text-sm text-graphite">en Google · +250 marcas gestionadas</span>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, idx) => (
            <div key={idx} className={`bg-white border ${!review.verified ? 'border-dashed' : 'border-solid'} border-bone-line rounded-lg p-6 ${!review.verified ? 'opacity-85' : ''}`}>
              {/* Stars */}
              <div className="text-gold text-base tracking-wider mb-4">
                {'★'.repeat(review.stars)}
              </div>

              {/* Text */}
              <p className="text-sm text-ink leading-relaxed mb-4">
                {review.text}
              </p>

              {/* Name */}
              <p className="text-sm font-medium text-ink mb-1">
                {review.name}
              </p>

              {/* Verified Badge */}
              <p className="font-mono text-xs text-graphite">
                {review.verified ? '✓ Reseña verificada · Google' : 'Reseña verificada · Google'}
              </p>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <a href="#" className="inline-flex items-center gap-2 text-ink font-medium hover:text-azure transition-colors">
            Ver todas las opiniones en Google →
          </a>
        </div>
      </div>
    </section>
  )
}
