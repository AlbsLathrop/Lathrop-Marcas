'use client';

import { useState, useRef, useEffect } from 'react';

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const cardWidth = scrollContainerRef.current.offsetWidth * 0.85;
        const newIndex = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(Math.min(newIndex, reviews.length - 1));
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [reviews.length]);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth * 0.85;
      scrollContainerRef.current.scrollLeft = cardWidth * index;
    }
  };

  return (
    <section className="bg-ink text-white py-1 md:py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-2 md:space-y-4 mb-2 md:mb-4 md:mb-12">
          <p className="font-mono text-xs font-medium text-brass uppercase tracking-widest">Reseñas</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
            Lo que dicen quienes ya registraron.
          </h2>
        </div>

        {/* Rating Summary */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-display font-bold text-white">4.8/5</span>
            <span className="text-brass text-lg">★★★★★</span>
          </div>
          <span className="font-sans text-sm text-white/70">en Google</span>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scroll-smooth mb-6 md:mb-8"
          style={{
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <div className="flex gap-4 pb-1 px-4 md:px-8" style={{ width: 'fit-content' }}>
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="flex flex-col p-6 md:p-8 rounded-[8px] flex-shrink-0"
                style={{
                  width: '85vw',
                  maxWidth: '480px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(198, 161, 91, 0.2)',
                  scrollSnapAlign: 'start',
                  scrollSnapStop: 'always',
                }}
              >
                {/* Five Stars */}
                <div className="text-brass text-lg mb-2 md:mb-4 tracking-wider">
                  ★★★★★
                </div>

                {/* Text */}
                <p className="text-base md:text-lg text-white leading-relaxed mb-6 flex-grow font-sans">
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
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                backgroundColor: currentIndex === idx ? '#C6A15B' : 'rgba(198, 161, 91, 0.4)',
                cursor: 'pointer',
              }}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="https://maps.app.goo.gl/5JEzPc6exAVvHPUTA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-1 md:py-2 min-h-11 md:min-h-auto border border-brass text-brass font-medium rounded-[8px] hover:bg-brass hover:text-ink transition-all"
          >
            Ver todas las opiniones en Google →
          </a>
        </div>
      </div>
    </section>
  )
}
