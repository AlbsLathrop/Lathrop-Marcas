import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Registro de Marca en Chile · Lathrop Marcas',
  description:
    'Asesoría técnica especializada en registro de marcas ante el INAPI. Para negocios que ya facturan y necesitan proteger su identidad comercial con criterio técnico.',
  keywords: [
    'registro de marcas',
    'INAPI',
    'abogado marcario',
    'propiedad intelectual',
    'Chile',
    'asesoría técnica',
  ],
  openGraph: {
    title: 'Registro de Marca en Chile · Lathrop Marcas',
    description:
      'Asesoría técnica especializada en registro de marcas ante el INAPI. Para negocios que ya facturan y necesitan proteger su identidad comercial con criterio técnico.',
    url: 'https://lathropmarcas.cl',
    type: 'website',
    locale: 'es_CL',
    images: [
      {
        url: '/images/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Lathrop Marcas — Registro de Marca en Chile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Registro de Marca en Chile · Lathrop Marcas',
    description:
      'Asesoría técnica especializada en registro de marcas ante el INAPI.',
    images: ['/images/og.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#0B1A2F',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
