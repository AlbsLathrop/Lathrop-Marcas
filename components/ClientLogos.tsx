"use client";

import { useState } from 'react'
import Image from 'next/image'

export default function ClientLogos() {
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
    { name: '', file: 'slot-10.png' },
    { name: '', file: 'slot-11.png' },
    { name: '', file: 'slot-12.png' },
  ]

  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  const handleImageError = (filename: string) => {
    setImageErrors((prev) => new Set(prev).add(filename))
  }

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-navy mb-12 md:mb-16">
          Marcas que confían
        </h2>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {logos.map((logo, index) => {
            const hasError = imageErrors.has(logo.file)

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 h-20 md:h-24 flex items-center justify-center hover:shadow-md transition-shadow duration-300"
              >
                {hasError || logo.name === '' ? (
                  <p className="text-xs text-gray-400 text-center">
                    {logo.name || ''}
                  </p>
                ) : (
                  <Image
                    src={`/images/logos/${logo.file}`}
                    alt={logo.name}
                    width={150}
                    height={96}
                    className="max-w-full max-h-full object-contain grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    onError={() => handleImageError(logo.file)}
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-text-muted mt-8">
          Logos de clientes en proceso de carga — serán actualizados próximamente
        </p>
      </div>
    </section>
  )
}
