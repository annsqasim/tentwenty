/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0, transform: 'translateY(6px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
          },
          float: {
            '0%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-6px)' },
            '100%': { transform: 'translateY(0)' }
          }
        },
        animation: {
          fadeIn: 'fadeIn 420ms ease-out both',
          float: 'float 3s ease-in-out infinite'
        },
        fontFamily: {
          sans: ['"Work Sans"', 'sans-serif']
        }
      }
    },
    plugins: []
  }