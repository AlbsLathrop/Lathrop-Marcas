"use client";

import { useState, useEffect } from 'react'

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
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1">
          <span className="font-serif text-xl md:text-2xl font-medium text-ink" style={{ letterSpacing: '0.05em' }}>
            lathrop.
          </span>
          <span className="font-serif text-xl md:text-2xl font-medium text-ink" style={{ letterSpacing: '0.05em' }}>
            marcas
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-azure mt-1"></span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-ink border border-azure/30 text-bone rounded-lg font-medium text-sm md:text-base transition-all duration-300 hover:bg-azure hover:border-azure"
        >
          <span className="w-1 h-1 rounded-full bg-azure flex-shrink-0"></span>
          WHATSAPP
        </a>
      </div>
    </nav>
  )
}
