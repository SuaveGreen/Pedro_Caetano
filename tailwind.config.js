/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],

  //   0%, 100% {
  //   transform: translateY(-25%);
  //   animation-timing-function: cubic-bezier(0.8,0,1,1);
  // }

  theme: {
    extend: {
      keyframes: {
        bounceR: {
          '50%, 100%': { transform: 'translatex(-25%)' },
          '100%': { transform: 'none' },
        }
      },
      gridTemplateColumns: {
        'mainContainer': '65vh minmax(100px, 1fr)',
      },
      colors: {
        verdePastel: '#C6E5B1',
        verdeDivisoria: '#dae7d1',
        verdeShadow: '#253819'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'serif'],
      },
      animation: {
        bounceR: 'bounceR 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

