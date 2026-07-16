import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/privacidad'],
    },
    sitemap: 'https://lathropmarcas.cl/sitemap.xml',
  }
}
