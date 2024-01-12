/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'allison' : ['Allison', 'cursive'],
    }
  },
  plugins: [require("daisyui")],
}