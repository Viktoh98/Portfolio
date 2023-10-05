/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "full-viewport": "100%", // Customize the aspect ratio class
      },

      colors: {
        primary: "#1280fd",
        secondary: "#7ebaff",
        dark: "#000",
      },

      screens: {
        vs: { max: "435px" }, // Custom screen size for very small screens
      },
    },
  },
  plugins: [],
};
