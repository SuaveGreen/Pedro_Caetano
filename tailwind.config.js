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
    screens: {
      'celular': '320px',
      // => @media (min-width: 320px) { ... }

      'celularx': '640px',
      // => @media (min-width: 640px) sm { ... }

      'tablet': '768px',
      // => @media (min-width: 768px) md { ... }

      'tabletx': '1024px',
      // => @media (min-width: 1024px) lg { ... }

      'notebook': '1280px',
      // => @media (min-width: 1280px) xl { ... }

      'monitor': '1536px',
      // => @media (min-width: 1536px) 2xl { ... }
    }
  },
  plugins: [],
}

