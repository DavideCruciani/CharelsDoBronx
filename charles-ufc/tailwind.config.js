/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Sedgwick': ['Sedgwick Ave Display', 'sans-serif'],
      'Lakki': ['Lakki Reddy', 'sans-serif'],
    },
    extend: {
      screens: {
        'xs': '475px'
      },
      backgroundImage: {
        'gradient-top': 'linear-gradient(to bottom, rgba(21, 128, 61, 0.5) 0%, rgba(0, 0, 0, 0) 70%)'
      },
    },
  },
  plugins: [],
}

