/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Mythril palette
        mythril: {
          50: '#f8f9fa',
          100: '#e8eaed',
          200: '#d1d5db',
          300: '#c0c5cc',
          400: '#a8aeb8',
          500: '#8b929e',
          600: '#6b7280',
          700: '#4b5563',
          800: '#374151',
          900: '#1f2937',
        },
        // Moria backgrounds
        moria: {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a2e',
          600: '#252538',
        },
        // Accents
        dwarven: {
          DEFAULT: '#4a6fa5',
          light: '#6b8cbe',
          dark: '#3a5a8a',
        },
        forge: {
          glow: '#f4a261',
          ember: '#e76f51',
        },
        gem: {
          purple: '#7b2cbf',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
