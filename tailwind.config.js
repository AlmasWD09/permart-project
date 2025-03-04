/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#073F40', 
        'secondery':'#4A9935', 
      },
      fontFamily: {
        'Poppins': ["Poppins", "serif"],
        'Inter': ["Inter", "serif"],
        'Quicksand': ["Quicksand", "serif"],
      },
    },
  },
  plugins: [],
} 