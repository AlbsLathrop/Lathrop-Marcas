"use client";

import { useEffect, useRef } from 'react';

export default function CommonMistake() {
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    stageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const stages = [
    {
      title: 'Partes solo, con tu nombre',
      support: 'La marca todavía es una idea.',
      width: '20%',
    },
    {
      title: 'El nombre empieza a traer clientes',
      support: 'Reseñas, recomendaciones, tu nombre en la puerta.',
      width: '40%',
    },
    {
      title: 'Alguien más trabaja bajo tu nombre',
      support: 'Equipo, sucursal, distribuidor, franquicia.',
      width: '60%',
    },
    {
      title: 'Tu nombre vale más que tú',
      support: 'Es lo que compra, financia o negocia un tercero.',
      width: '100%',
    },
  ];

  return (
    <section className="bg-bone py-10 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <p className="label-badge text-azure">¿En qué etapa estás?</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink leading-tight mb-6">
            No es cuánto tiempo llevas. Es hasta dónde quieres llegar.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-graphite max-w-2xl text-pretty">
            Tu marca no se vuelve importante con los años. Se vuelve importante cuando tu nombre empieza a hacer trabajo que antes hacías tú.
          </p>
        </div>

        {/* Growth Staircase — Card Layout */}
        <div className="mb-12">
          {/* Desktop: Horizontal cards with connectors */}
          <div className="hidden md:flex gap-6 items-center justify-between mb-12">
            {stages.map((stage, idx) => (
              <div key={idx} className="flex items-center flex-1">
                {/* Card */}
                <div
                  ref={(el) => {
                    stageRefs.current[idx] = el;
                  }}
                  className="flex-1 p-6 rounded-lg transition-all duration-500"
                  style={{
                    background: idx === 3 ? 'rgba(198, 161, 91, 0.1)' : 'rgba(255, 255, 255, 0.4)',
                    border: idx === 3 ? '1.5px solid #C6A15B' : '1px solid rgba(198, 161, 91, 0.2)',
                  }}
                >
                  <p className="font-mono text-xs font-medium text-graphite uppercase tracking-widest mb-2">
                    0{idx + 1}
                  </p>
                  <h3 className="text-base md:text-lg font-serif font-bold text-ink mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-graphite">
                    {stage.support}
                  </p>
                </div>

                {/* Connector (chevron to the right) */}
                {idx < 3 && (
                  <div className="flex-shrink-0 mx-2 text-brass text-xl font-medium">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: Vertical cards with connectors */}
          <div className="md:hidden space-y-4">
            {stages.map((stage, idx) => (
              <div key={idx}>
                {/* Card */}
                <div
                  ref={(el) => {
                    stageRefs.current[idx] = el;
                  }}
                  className="p-5 rounded-lg transition-all duration-500"
                  style={{
                    background: idx === 3 ? 'rgba(198, 161, 91, 0.1)' : 'rgba(255, 255, 255, 0.4)',
                    border: idx === 3 ? '1.5px solid #C6A15B' : '1px solid rgba(198, 161, 91, 0.2)',
                  }}
                >
                  <p className="font-mono text-xs font-medium text-graphite uppercase tracking-widest mb-2">
                    0{idx + 1}
                  </p>
                  <h3 className="text-base font-serif font-bold text-ink mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-graphite">
                    {stage.support}
                  </p>
                </div>

                {/* Connector (chevron down) */}
                {idx < 3 && (
                  <div className="flex justify-center text-brass text-lg font-medium py-1">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="border-l-4 border-azure pl-6 py-4 mb-8">
          <p className="text-lg md:text-xl font-serif font-bold text-ink leading-tight">
            Registrar cuesta lo mismo en cualquiera de estas etapas. Cambiar el nombre, no.
          </p>
        </div>

        {/* CTA */}
        <a
          href="#planes"
          className="inline-block px-7 py-3.5 bg-ink text-white rounded-lg font-medium hover:bg-azure transition-all"
        >
          Asegurar mi marca →
        </a>
      </div>
    </section>
  );
}
