"use client";

import { useEffect, useRef } from 'react';

export default function CommonMistake() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="bg-bone py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="space-y-8 mb-12">
          <p className="label-badge text-azure">El error más común</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink leading-tight">
            Inviertes en todo lo que hace crecer tu negocio.{' '}
            <span style={{ color: '#2D5A8C' }}>¿Y en lo que lo sostiene?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-graphite">
              Ads, cursos, mentorías, sitio web... inviertes en todo lo que escala tu negocio. Pero hay una base que sostiene TODA esa inversión y que nadie protege: tu marca.
            </p>

            <div
              ref={(el) => {
                refs.current[0] = el;
              }}
              className="in border-l-4 border-azure pl-6 py-4 transition-all duration-500"
              style={{
                opacity: 1,
                transform: 'translateY(0)',
              }}
            >
              <p className="text-lg md:text-xl font-serif font-bold text-ink leading-tight">
                Es asegurar la base de{' '}
                <span style={{ color: '#2D5A8C' }}>tu empresa</span> antes de seguir subiendo.
              </p>
            </div>

            <a
              href="#planes"
              className="inline-block px-7 py-3.5 bg-ink text-white rounded-lg font-medium hover:bg-azure transition-all"
            >
              Asegurar mi marca →
            </a>
          </div>

          {/* Right Column - Stack */}
          <div
            ref={(el) => {
              refs.current[1] = el;
            }}
            className="in space-y-3 transition-all duration-500"
            style={{
              opacity: 1,
              transform: 'translateY(0)',
            }}
          >
            <p className="font-mono text-xs font-medium text-graphite uppercase tracking-widest text-center mb-6">
              En lo que inviertes hoy
            </p>

            {['Publicidad y Ads', 'Cursos y mentorías', 'Sitio web y branding', 'Inventario y operación'].map((item) => (
              <div
                key={item}
                className="bg-white border border-bone-line rounded-lg py-6 px-4 text-center font-medium text-graphite"
              >
                {item}
              </div>
            ))}

            {/* Base Block */}
            <div className="bg-ink text-white rounded-lg py-6 px-4 text-center pt-8 relative">
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '1px',
                  height: '12px',
                  background: '#2D5A8C',
                }}
              ></div>
              <p className="font-serif font-bold text-xl text-bone">Tu marca registrada</p>
              <p className="font-mono text-xs text-azure-bright uppercase tracking-widest mt-2">
                La base que sostiene todo lo demás
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
