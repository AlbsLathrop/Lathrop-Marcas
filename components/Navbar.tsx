"use client";

export default function Navbar() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '56912345678'
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1">
          <span className="font-serif text-xl md:text-2xl font-medium text-navy" style={{ letterSpacing: '0.05em' }}>
            lathrop.
          </span>
          <span className="font-serif text-xl md:text-2xl font-medium text-navy" style={{ letterSpacing: '0.05em' }}>
            marcas
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1"></span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-navy border border-white/15 text-white rounded-lg font-medium text-sm md:text-base hover:bg-accent-dark transition-all duration-200"
        >
          <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0"></span>
          WHATSAPP
        </a>
      </div>
    </nav>
  )
}
