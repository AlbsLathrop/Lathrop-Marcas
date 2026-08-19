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
        azure: '#4A7BA7',
        'azure-bright': '#4A7BA7',
        bone: '#FAFBFC',
        'bone-line': '#E5E7EB',
        graphite: '#3A4553',
        gold: '#B08D4F',
        brass: '#C6A15B',
        'slate-200': '#E5E7EB',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        'h1': 'clamp(2.5rem, 5vw, 3.75rem)',
        'h2': 'clamp(1.6rem, 3.4vw, 2.35rem)',
        'h3': '1.25rem',
        'body-lg': '1.125rem',
        'body': '1rem',
        'caption': '0.875rem',
      },
    },
  },
  plugins: [],
}
export default config
