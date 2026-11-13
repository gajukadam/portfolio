/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        dark: {
          bg: '#0B0410',
          card: '#140A1F',
          surface: '#1A0D28',
          border: 'rgba(255, 107, 53, 0.2)',
        },
        sunset: {
          400: '#FF8A50',
          500: '#FF6B35', // Bold Electric Orange
          600: '#FF5722',
          glow: 'rgba(255, 107, 53, 0.4)',
        },
        cyberpink: {
          400: '#FF5C9D',
          500: '#FF2A85', // Bold Electric Hot Pink
          600: '#E11D48',
          glow: 'rgba(255, 42, 133, 0.4)',
        },
        amber: {
          400: '#FBBF24',
          500: '#FFAE33',
        }
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spinReverse 25s linear infinite',
        'pulse-subtle': 'pulseSubtle 3.5s ease-in-out infinite',
        'float-slow': 'floatSlow 5s ease-in-out infinite',
        'float-delayed': 'floatSlow 5.5s ease-in-out 2s infinite',
        'fade-in': 'fadeIn 0.35s ease-out forwards',
      },
      keyframes: {
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-7px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.03)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
