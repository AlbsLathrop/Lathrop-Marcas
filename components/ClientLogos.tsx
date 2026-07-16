"use client";

import { useRef, useState } from 'react';
import Image from 'next/image';

export default function ClientLogos() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const logos = [
    { name: 'D Joyas', file: 'djoyas.png' },
    { name: 'StartHunt', file: 'starthunt.png' },
    { name: 'Mac Golf', file: 'macgolf.png' },
    { name: 'PKI', file: 'pki.png' },
    { name: 'Cherry Boom', file: 'cherryboom.png' },
    { name: 'La Raya', file: 'laraya.png' },
    { name: 'Tierras de San Clemente', file: 'tierrasdesanclemente.png' },
    { name: 'Tutum', file: 'tutum.png' },
    { name: 'Casa Torreón', file: 'casatorreon.png' },
    { name: 'Ruta Outdoor', file: 'rutaoutdoor.png' },
    { name: 'BAGZ', file: 'bagz.png' },
    { name: '572', file: '572.png' },
    { name: 'Rocas del Tabo', file: 'rocasdeltabo.png' },
    { name: 'Mirador del Tabo', file: 'miradordeltabo.png' },
    { name: 'Pre Senior', file: 'presenior.png' },
    { name: 'Identiglass', file: 'identiglass.png' },
    { name: 'Sour and Soul', file: 'sourandsoul.png' },
    { name: 'Tierra Magna', file: 'tierramagna.png' },
    { name: 'Time 2 Clean', file: 'time2clean.png' },
  ];

  return (
    <section className="logos bg-bone py-14 md:py-16 border-t border-b border-bone-line">
      <div className="wrap max-w-6xl mx-auto px-4 md:px-8">
        {/* Label */}
        <p className="font-mono text-xs font-medium text-azure uppercase tracking-widest text-center mb-8">
          Marcas que confían
        </p>

        {/* Marquee Container */}
        <div
          className="marquee overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            ref={marqueeRef}
            className="track flex gap-8"
            style={{
              animation: isHovering
                ? 'none'
                : 'scroll-left 55s linear infinite',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
              maskImage:
                'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            }}
          >
            {/* Duplicate logos for continuous loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="logo-item flex-shrink-0"
                style={{
                  minWidth: '150px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src={`/images/logos/${logo.file}`}
                  alt={logo.name}
                  width={150}
                  height={38}
                  style={{
                    height: '38px',
                    maxWidth: '150px',
                    objectFit: 'contain',
                    opacity: 0.58,
                    transition: 'opacity 0.3s ease',
                  }}
                  className="hover:opacity-100"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.opacity = '0.58';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Microcopy */}
        <p className="mono font-mono text-xs tracking-widest text-center mt-8 text-graphite">
          Negocios que ya protegieron su identidad comercial conmigo.
        </p>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .track {
            animation: none !important;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
