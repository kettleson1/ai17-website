/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#E55C20',
      },
    },
  },
},
  plugins: [],
};