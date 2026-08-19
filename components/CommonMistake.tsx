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
          <p className="text-lg md:text-xl leading-relaxed text-graphite max-w-2xl">
            Tu marca no se vuelve importante con los años. Se vuelve importante cuando tu nombre empieza a hacer trabajo que antes hacías tú.
          </p>
        </div>

        {/* Growth Staircase */}
        <div className="relative pl-8 md:pl-12 mb-12">
          {/* Vertical axis line */}
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-bone-line"></div>

          {/* Stages */}
          <div className="space-y-8">
            {stages.map((stage, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  stageRefs.current[idx] = el;
                }}
                className="in transition-all duration-500"
                style={{
                  opacity: 1,
                  transform: 'translateY(0)',
                }}
              >
                {/* Node point */}
                <div className="absolute -left-2.5 md:-left-3.5 top-1.5 w-5 h-5 rounded-full bg-brass border-4 border-bone shadow-sm"></div>

                {/* Content */}
                <div>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-ink mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-sm md:text-base text-graphite mb-3">
                    {stage.support}
                  </p>

                  {/* Progress bar */}
                  <div className="h-1.5 bg-graphite/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brass transition-all duration-700"
                      style={{
                        width: stage.width,
                      }}
                    ></div>
                  </div>
                </div>
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
