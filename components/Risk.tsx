"use client";

import { useEffect, useRef } from 'react';

export default function Risk() {
  const blockARefs = useRef<(HTMLDivElement | null)[]>([]);
  const blockBRefsLeft = useRef<(HTMLDivElement | null)[]>([]);
  const blockBRefsRight = useRef<(HTMLDivElement | null)[]>([]);

  const blockA = [
    {
      title: 'Ni el uso ni los años te dan el derecho',
      description:
        'No la protege el uso, ni los años, ni tener el nombre en el SII. En Chile la protege el registro, y nada más.',
      svg: (
        <svg className="risk-ico" viewBox="0 0 40 40">
          <path pathLength="1" d="M13 36 V6" />
          <path pathLength="1" d="M13 7 L31 11.5 L13 16" />
          <circle pathLength="1" cx="13" cy="36" r="2.3" />
        </svg>
      ),
    },
    {
      title: 'El que te copia está cerca',
      description:
        'No es un tercero anónimo en internet: es alguien de tu rubro que abre con un nombre casi igual y te desvía clientes que creían estar contratándote a ti.',
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

  const blockBServices = [
    {
      title: 'Las reseñas no se mudan',
      description:
        'Años de estrellas en Google atadas a un nombre. Si tienes que cambiarlo, esa ficha parte de cero: mismo equipo, misma calidad, sin reputación.',
      svg: (
        <svg className="risk-ico" viewBox="0 0 40 40">
          <path pathLength="1" d="M8 20 Q8 12 16 12 Q24 12 24 20" />
          <path pathLength="1" d="M6 28 Q6 18 20 18 Q34 18 34 28" />
          <circle pathLength="1" cx="20" cy="8" r="2" />
        </svg>
      ),
    },
    {
      title: 'Tu nombre está en la fachada',
      description:
        'Señalética, uniformes, boletas, contratos y convenios. Cambiarlo no es editar una web: es rehacer un local y avisarle a cada cliente que sigues siendo tú.',
      svg: (
        <svg className="risk-ico" viewBox="0 0 40 40">
          <path pathLength="1" d="M10 34 V8 L20 2 L30 8 V34 Z" />
          <path pathLength="1" d="M20 2 V34" />
          <path pathLength="1" d="M14 16 H26" />
          <path pathLength="1" d="M14 24 H26" />
        </svg>
      ),
    },
  ];

  const blockBProducts = [
    {
      title: 'Mercado Libre te frena',
      description:
        'Tienda Oficial exige título de marca vigente o al menos solicitud en trámite. Sin eso, el canal queda bloqueado hasta que resuelvas el registro.',
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
      title: 'Retail y distribuidores lo piden',
      description:
        'Cada cadena y cada distribuidor nuevo pide acreditar la marca. Sin registro, cada canal que abres tiene un freno legal antes de vender el primer producto.',
      svg: (
        <svg className="risk-ico" viewBox="0 0 40 40">
          <path pathLength="1" d="M10 34 L10 8" />
          <path pathLength="1" d="M30 34 L30 8" />
          <path pathLength="1" d="M10 14 L30 14" />
          <path pathLength="1" d="M10 22 L30 22" />
          <path pathLength="1" d="M10 30 L30 30" />
        </svg>
      ),
    },
  ];

  const setupObserver = (refs: React.MutableRefObject<(HTMLDivElement | null)[]>) => {
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

    return observer;
  };

  useEffect(() => {
    const obs1 = setupObserver(blockARefs);
    const obs2 = setupObserver(blockBRefsLeft);
    const obs3 = setupObserver(blockBRefsRight);

    return () => {
      [obs1, obs2, obs3].forEach((obs) => {
        obs.disconnect();
      });
    };
  }, []);

  const RiskCard = ({ risk, index, refArray }: { risk: any; index: number; refArray: React.MutableRefObject<(HTMLDivElement | null)[]> }) => (
    <div
      ref={(el) => {
        refArray.current[index] = el;
      }}
      className="risk-item p-8 md:p-10 rounded-xl transition-all duration-300 hover:-translate-y-1 cursor-default group flex flex-col h-full"
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
      <div className="mb-4">{risk.svg}</div>

      {/* Title */}
      <h3 className="text-xl font-serif font-bold text-white mb-3 leading-tight">
        {risk.title}
      </h3>

      {/* Description */}
      <p className="text-base text-gray-200 leading-relaxed flex-grow">
        {risk.description}
      </p>
    </div>
  );

  return (
    <section className="bg-ink text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-6 mb-16">
          <p className="label-badge text-azure-bright">El Riesgo de No Actuar</p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold leading-tight">
            Sin registro vigente, tu nombre trabaja para quien llegue primero.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-white/70 max-w-2xl">
            Da lo mismo cuántos años lleves usándolo. Si no está inscrito, no es tuyo.
          </p>
        </div>

        {/* Block A — Two wide cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {blockA.map((risk, index) => (
            <RiskCard key={index} risk={risk} index={index} refArray={blockARefs} />
          ))}
        </div>

        {/* Block B — Two columns with headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column — Services */}
          <div>
            <h3 className="text-lg sm:text-2xl font-serif font-bold mb-6" style={{ color: '#5B9BD1' }}>
              SI OFRECES SERVICIOS
            </h3>
            <div className="space-y-6">
              {blockBServices.map((risk, index) => (
                <RiskCard key={index} risk={risk} index={index} refArray={blockBRefsLeft} />
              ))}
            </div>
          </div>

          {/* Right Column — Products */}
          <div>
            <h3 className="text-lg sm:text-2xl font-serif font-bold mb-6" style={{ color: '#C6A15B' }}>
              SI VENDES PRODUCTOS
            </h3>
            <div className="space-y-6">
              {blockBProducts.map((risk, index) => (
                <RiskCard key={index} risk={risk} index={index} refArray={blockBRefsRight} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
