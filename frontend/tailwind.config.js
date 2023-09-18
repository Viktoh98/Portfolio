/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'full-viewport': '100%', // Customize the aspect ratio class
      },
      
      colors: {
        'primary': '#1280fd',
        'secondary': '#011a6dfa',
        'dark': '#222'
      },

      screens: {
        'vs': {'max': '400px'}, // Custom screen size for very small screens
      },

    },
  },
  plugins: [],
}