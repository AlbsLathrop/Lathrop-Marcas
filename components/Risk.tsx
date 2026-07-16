"use client";

import { useEffect, useRef } from 'react';

export default function Risk() {
  const riskRefs = useRef<(HTMLDivElement | null)[]>([]);

  const risks = [
    {
      title: 'Pérdida del nombre comercial',
      description:
        'Un tercero puede registrar tu nombre antes que tú y forzarte a rehacerlo todo: marca, web, redes y el capital comercial que construiste durante años.',
      svg: (
        <svg className="risk-ico" viewBox="0 0 40 40">
          <path pathLength="1" d="M13 36 V6" />
          <path pathLength="1" d="M13 7 L31 11.5 L13 16" />
          <circle pathLength="1" cx="13" cy="36" r="2.3" />
        </svg>
      ),
    },
    {
      title: 'Fricción comercial en expansión',
      description:
        'Mercado Libre Tienda Oficial, distribuidores y cadenas de retail exigen título de marca vigente. Sin él, cada canal nuevo tiene un freno legal antes de empezar.',
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
      title: 'Activo sin respaldo legal',
      description:
        'En una venta, fusión o ronda de inversión, una marca no registrada no tiene valor contable. El trabajo construido queda en narrativa, no en documento.',
      svg: (
        <svg className="risk-ico" viewBox="0 0 40 40">
          <path pathLength="1" d="M11 6 H26 L30 10 V34 H11 Z" />
          <path pathLength="1" d="M15 15 H26" />
          <path pathLength="1" d="M15 20 H26" />
          <path pathLength="1" d="M15 25 H22" />
          <circle className="seal" cx="28" cy="30" r="5" />
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
            Cada día que operas sin marca registrada es un día en que cualquier competidor puede apropiarse legalmente de tu identidad comercial.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {risks.map((risk, index) => (
            <div
              key={index}
              ref={(el) => {
                riskRefs.current[index] = el;
              }}
              className="risk-item p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 cursor-default group"
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
              {/* SVG Icon */}
              {risk.svg}

              {/* Title (.n class) */}
              <h3 className="n text-lg font-semibold uppercase tracking-widest mb-3" style={{ fontSize: '13px', color: '#5B9BD1', minHeight: '2.8em', lineHeight: 1.5, display: 'flex', alignItems: 'flex-end' }}>
                {risk.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-100 leading-relaxed">
                {risk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
