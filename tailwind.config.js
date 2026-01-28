/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dirt-yellow': '#FFD700',
        'dirt-blue': '#0066E3',
        'dirt-dark': '#0a0a0a',
        'dirt-gray': '#1a1a1a',
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
