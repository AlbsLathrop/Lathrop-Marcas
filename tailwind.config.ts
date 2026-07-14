import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a1628',
        'navy-light': '#0f2040',
        accent: '#3b82f6',
        'accent-dark': '#1d4ed8',
        cream: '#f8f7f4',
        'text-primary': '#1a2744',
        'text-muted': '#6b7a9a',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
