/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...colors, // ✅ Preserve all Tailwind colors
        primary: '#FFD700',
        dark: '#000000',
        light: '#f9f9f9',
        accent: '#ffef99',
        muted: '#222',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        '2xl': '1.5rem',
        '4xl': '2rem',
      },
      zIndex: {
        '-1': '-1',
        '999': '999',
      },
      dropShadow: {
        glow: '0 0 10px rgba(255, 215, 0, 0.6)',
        soft: '0 4px 20px rgba(255, 255, 255, 0.05)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 0px rgba(255, 215, 0, 0.5)' },
          '50%': { opacity: 0.8, boxShadow: '0 0 12px rgba(255, 215, 0, 0.8)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
      },
      scrollMargin: {
        24: '6rem',
        32: '8rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.yellow.400'),
              '&:hover': {
                color: theme('colors.white'),
              },
            },
            strong: { color: theme('colors.white') },
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            h4: { color: theme('colors.white') },
            code: { color: theme('colors.yellow.300') },
            blockquote: {
              borderLeftColor: theme('colors.yellow.400'),
              color: theme('colors.gray.300'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
};