/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        blue: {
          700: "#146EB4",
          750: "#1174c2",
          800: "#1E2640",
          900: "#0E4F82"
        },
        white:{
          50: "#FAFAFA",
          100: "rgba(255, 255, 255, 0.1)",
          200: "rgba(255, 255, 255, 0.8)",
          500: "#ffffff",
        }
      },
      width:{
        w:{
          "69":"250px",
        }
      }
    },
  },
  plugins: [],
}

