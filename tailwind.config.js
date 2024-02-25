/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
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

      }
    },
  },
  plugins: [],
}

