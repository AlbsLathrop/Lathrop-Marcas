'use client'

import { useState, useEffect } from 'react'

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const reviews = [
    {
      stars: 5,
      text: 'Estrategia personalizada, profesionalismo y trato humano. Gran compromiso. 100% recomendados.',
      author: 'Lester Acuña',
      source: 'RESEÑA VERIFICADA · GOOGLE',
    },
    {
      stars: 5,
      text: 'Proceso claro, transparente y muy profesional. Alberto resolvió todo sin que yo tuviera que moverme. Recomendado al 100%.',
      author: 'M. González',
      source: 'RESEÑA VERIFICADA · GOOGLE',
    },
    {
      stars: 5,
      text: 'Muy buen servicio. Nos explicaron todos los riesgos antes de empezar y eso fue clave para tomar la decisión correcta.',
      author: 'C. Vásquez',
      source: 'RESEÑA VERIFICADA · GOOGLE',
    },
  ]

  useEffect(() => {
    if (isHovered) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [isHovered, reviews.length])


  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy">
            Lo que dicen quienes ya registraron
          </h2>
          <div className="flex items-center gap-2 text-sm md:text-base">
            <span className="font-semibold text-navy">4.9/5 en Google</span>
            <span className="text-text-muted">·</span>
            <span className="text-text-muted">+250 marcas asesoradas</span>
          </div>
        </div>

        {/* Slider */}
        <div
          className="space-y-6 md:space-y-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(currentSlide, currentSlide + 3).map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200 space-y-4 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(review.stars)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-base md:text-lg text-text-muted leading-relaxed">
                  &quot;{review.text}&quot;
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-gray-200 space-y-1">
                  <p className="font-semibold text-navy">{review.author}</p>
                  <p className="text-xs md:text-sm text-text-muted uppercase tracking-wider">
                    {review.source}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 pt-4">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide % reviews.length
                    ? 'bg-navy w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Link to all reviews */}
          <div className="text-center pt-4">
            <a
              href={process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy font-medium hover:text-accent transition-colors"
            >
              Ver todas las opiniones en Google →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
