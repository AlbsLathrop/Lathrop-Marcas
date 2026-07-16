"use client";

import { useRef, useState } from 'react';
import Image from 'next/image';

export default function ClientLogos() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const logos = [
    { name: 'Cherry Boom', file: 'cherry-boom.png' },
    { name: 'StartHunt', file: 'starthunt.png' },
    { name: 'Rocas del Tabo', file: 'rocas-del-tabo.png' },
    { name: 'BAGZ', file: 'bagz.png' },
    { name: 'Ideniglass', file: 'ideniglass.png' },
    { name: 'Mirador del Tabo', file: 'mirador-del-tabo.png' },
    { name: 'Casa Torreón', file: 'casa-torreon.png' },
    { name: 'Tierra Magna', file: 'tierra-magna.png' },
    { name: 'Valfra', file: 'valfra.png' },
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
