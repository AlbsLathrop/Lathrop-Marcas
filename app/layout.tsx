import type { Metadata } from 'next'
import Script from 'next/script'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppLeadTracker from '@/components/WhatsAppLeadTracker'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Registro de Marca en Chile · Lathrop Marcas',
  description:
    'Asesoría técnica en registro de marcas ante el INAPI. Para negocios de servicios y productos que ya operan y necesitan proteger su nombre con criterio técnico.',
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
      'Asesoría técnica en registro de marcas ante el INAPI. Para negocios de servicios y productos que ya operan y necesitan proteger su nombre con criterio técnico.',
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
      'Asesoría técnica en registro de marcas ante el INAPI. Para negocios de servicios y productos que ya operan y necesitan proteger su nombre con criterio técnico.',
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
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '929690635298250');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=929690635298250&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Organization Schema */}
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: 'Lathrop Marcas',
              url: 'https://lathropmarcas.cl',
              areaServed: {
                '@type': 'Place',
                name: 'Chile',
              },
              serviceType: 'Asesoría en Propiedad Industrial',
              description: 'Asesoría técnica en registro de marcas ante el INAPI. Para negocios de servicios y productos que ya operan y necesitan proteger su nombre con criterio técnico.',
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <WhatsAppLeadTracker />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
