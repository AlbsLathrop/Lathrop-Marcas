'use client'

import Link from 'next/link'

export default function Navbar() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '56912345678'
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span className="font-serif text-xl md:text-2xl font-bold text-navy">
            lathrop.
          </span>
          <span className="font-serif text-xl md:text-2xl font-bold text-navy">
            marcas
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1"></span>
        </Link>

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-green-500 text-white rounded-lg font-medium text-sm md:text-base hover:bg-green-600 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.781 1.469c-1.595.893-2.788 2.39-3.643 4.408-.393.89-.643 1.902-.643 3.08 0 .837.134 1.641.394 2.458l.457 1.486-1.523 5.471 5.639-1.48.955.236c.828.215 1.671.322 2.447.322h.004c5.55 0 10.046-4.49 10.046-10.009 0-2.676-1.093-5.2-3.076-7.1a10.008 10.008 0 00-7.14-2.953z" />
          </svg>
          WHATSAPP
        </a>
      </div>
    </nav>
  )
}
