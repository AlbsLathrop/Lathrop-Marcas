"use client";

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '56912345678'
  const whatsappLink = `https://wa.me/${whatsappNumber}`
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bone/80 backdrop-blur-lg border-b border-bone-line'
          : 'bg-bone border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/images/lathrop-logo.png"
            width={462}
            height={160}
            priority
            className="h-9 md:h-9 w-auto"
            alt="Lathrop Marcas"
          />
        </a>

        {/* Contact Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (typeof window !== 'undefined' && typeof (window as any).fbq !== 'undefined') {
              (window as any).fbq('track', 'Lead');
            }
          }}
          className="px-5 md:px-6 py-2.5 md:py-3 bg-ink border border-azure/30 text-bone rounded-lg font-medium text-sm md:text-base transition-all duration-300 hover:bg-azure hover:border-azure"
        >
          Contacto
        </a>
      </div>
    </nav>
  )
}
