"use client";

import { useEffect, useRef } from 'react';

export default function Risk() {
  const riskRefs = useRef<(HTMLDivElement | null)[]>([]);

  const risks = [
    {
      title: 'Pérdida del nombre comercial',
      description:
        'Un tercero puede registrar tu nombre antes que tú y forzarte a rehacerlo todo: marca, web, redes y el capital comercial que construiste durante años. En Chile la marca es de quien la inscribe, no de quien la usa.',
      tag: null,
      svg: (
        <svg className="risk-ico" viewBox="0 0 40 40">
          <path pathLength="1" d="M13 36 V6" />
          <path pathLength="1" d="M13 7 L31 11.5 L13 16" />
          <circle pathLength="1" cx="13" cy="36" r="2.3" />
        </svg>
      ),
    },
    {
      title: 'La reputación no se transfiere',
      description:
        'Años de reseñas en Google, recomendaciones y boca a boca están atados a un nombre. Si tienes que cambiarlo, esa ficha empieza de cero: mismo equipo, misma calidad, cero estrellas. Para un negocio que vive de que lo recomienden, ese es el activo más caro de reconstruir.',
      tag: 'Servicios',
      svg: (
        <svg className="risk-ico" viewBox="0 0 40 40">
          <path pathLength="1" d="M8 20 Q8 12 16 12 Q24 12 24 20" />
          <path pathLength="1" d="M6 28 Q6 18 20 18 Q34 18 34 28" />
          <circle pathLength="1" cx="20" cy="8" r="2" />
        </svg>
      ),
    },
    {
      title: 'El nombre también está en el mundo físico',
      description:
        'Fachada, señalética, uniformes, boletas, contratos y convenios. Cambiar de nombre no es actualizar un sitio web: es rehacer un local y avisarle a cada cliente que sigues siendo tú. El costo crece con cada mes que sigues operando.',
      tag: 'Local',
      svg: (
        <svg className="risk-ico" viewBox="0 0 40 40">
          <path pathLength="1" d="M10 34 V8 L20 2 L30 8 V34 Z" />
          <path pathLength="1" d="M20 2 V34" />
          <path pathLength="1" d="M14 16 H26" />
          <path pathLength="1" d="M14 24 H26" />
        </svg>
      ),
    },
    {
      title: 'Canales de venta bloqueados',
      description:
        'Mercado Libre Tienda Oficial, distribuidores y cadenas de retail exigen título de marca vigente o al menos solicitud en trámite. Sin eso, cada canal nuevo tiene un freno legal antes de empezar a vender.',
      tag: 'Productos',
      svg: (
        <svg className="risk-ico" viewBox="0 0 40 40">
          <path pathLength="1" d="M5 20 H17" />
          <path pathLength="1" d="M17 20 L28 10" />
          <path pathLength="1" d="M17 20 H29" />
          <path pathLength="1" d="M17 20 L28 30" />
          <circle pathLength="1" cx="17" cy="20" r="2.3" />
          <path pathLength="1" d="M34 6 V34" />
        </svg>
      ),
    },
    {
      title: 'Competencia directa con nombre parecido',
      description:
        'El riesgo real no es un tercero anónimo: es alguien de tu mismo rubro que abre cerca con un nombre casi igual y te desvía clientes que creían estar contratándote a ti. Con la marca registrada eso se detiene. Sin ella, no.',
      tag: null,
      svg: (
        <svg className="risk-ico" viewBox="0 0 40 40">
          <circle pathLength="1" cx="14" cy="14" r="8" />
          <circle pathLength="1" cx="26" cy="26" r="8" />
          <path pathLength="1" d="M20 20 L30 30" />
          <path pathLength="1" d="M14 6 V22" />
          <path pathLength="1" d="M26 18 V34" />
        </svg>
      ),
    },
  ];

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

    riskRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      riskRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="bg-ink text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-6 mb-12 md:mb-16">
          <p className="label-badge text-azure-bright">El Riesgo de No Actuar</p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold leading-tight">
            Sin registro vigente, tu nombre trabaja para quien llegue primero.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-white/70">
            Cada día que operas sin marca registrada es un día en que cualquiera puede inscribir tu nombre y obligarte a dejar de usarlo. No importa cuántos años lleves construyéndolo.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {risks.map((risk, index) => (
            <div
              key={index}
              ref={(el) => {
                riskRefs.current[index] = el;
              }}
              className="risk-item p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 cursor-default group flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                borderTop: '2px solid rgba(59,130,246,0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              {/* Tag */}
              {risk.tag && (
                <div
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '9px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#5B9BD1',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '4px',
                    padding: '3px 9px',
                    display: 'inline-block',
                    marginBottom: '12px',
                    width: 'fit-content',
                  }}
                >
                  {risk.tag}
                </div>
              )}

              {/* SVG Icon */}
              {risk.svg}

              {/* Title */}
              <h3 className="text-lg font-semibold uppercase tracking-widest mb-3" style={{ fontSize: '13px', color: '#5B9BD1', minHeight: '2.8em', lineHeight: 1.5, display: 'flex', alignItems: 'flex-end' }}>
                {risk.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-100 leading-relaxed flex-grow">
                {risk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
