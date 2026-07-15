import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B1A2F',
        'ink-soft': '#14263D',
        azure: '#2D5A8C',
        'azure-bright': '#3E7CB1',
        bone: '#F6F4EF',
        'bone-line': '#E8E4DB',
        graphite: '#3A4553',
        gold: '#B08D4F',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        'h1': 'clamp(2.5rem, 5vw, 3.75rem)',
        'h2': 'clamp(1.875rem, 4vw, 2.75rem)',
        'h3': '1.375rem',
        'body-lg': '1.125rem',
        'body': '1rem',
        'caption': '0.875rem',
      },
    },
  },
  plugins: [],
}
export default config
