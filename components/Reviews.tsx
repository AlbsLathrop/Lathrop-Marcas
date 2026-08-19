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
    <section className="bg-ink text-white py-12 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-4 mb-12">
          <p className="font-mono text-xs font-medium text-brass uppercase tracking-widest">Reseñas</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            Lo que dicen quienes ya registraron.
          </h2>
        </div>

        {/* Rating Header - Centered and Prominent */}
        <div className="flex flex-col items-center gap-2 mb-16">
          <span className="text-5xl md:text-6xl font-serif font-bold text-white">4.8/5</span>
          <span className="text-brass text-2xl tracking-wider">★★★★★</span>
          <span className="font-sans text-sm text-white/70">en Google</span>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Opening Quote */}
              <div className="text-6xl font-serif text-brass/20 leading-none mb-3">
                "
              </div>

              {/* Text - Larger */}
              <p className="text-lg text-white leading-relaxed mb-6 flex-grow font-sans">
                {review.text}
              </p>

              {/* Name */}
              <p className="text-sm font-semibold text-white mb-1 font-sans">
                {review.name}
              </p>

              {/* Verified Badge */}
              <p className="font-sans text-xs text-white/60">
                Reseña verificada · Google
              </p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="https://maps.app.goo.gl/5JEzPc6exAVvHPUTA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-brass text-brass font-medium rounded-lg hover:bg-brass hover:text-ink transition-all"
          >
            Ver todas las opiniones en Google →
          </a>
        </div>
      </div>
    </section>
  )
}
