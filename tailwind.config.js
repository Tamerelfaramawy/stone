/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        primary: {
          50: '#f9fafa',
          100: '#f1f1f1',
          200: '#e4e4e4',
          300: '#c9c9c9',
          400: '#ababab',
          500: '#8d8d8d',
          600: '#636363',
          700: '#4d4d4d',
          800: '#2d2d2d',
          900: '#1a1a1a',
        },
        accent: {
          50: '#fbf8f1',
          100: '#f7f1e2',
          200: '#f0e3c3',
          300: '#e6d09d',
          400: '#d9b973',
          500: '#cba54c',
          600: '#b78e39',
          700: '#97732e',
          800: '#7c5d27',
          900: '#664c23',
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      height: {
        '128': '32rem',
      },
      maxHeight: {
        '128': '32rem',
        '144': '36rem',
      },
      minHeight: {
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
};