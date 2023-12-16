/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1FBAFF",
        darkBlue: "#13518E",
        lightBlue: "#486786",
        dark: "#050F36",
        yellow: "#FFC700",
        midBlue: "#A1C7EC",
        gray: "#96A1A8"
      },
      boxShadow: {
        '3xl': '0 23px 37px 0 #1FBAFF10',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1180px",
      xl: "1440px",
      xxl: "1420px"
    },

  },
  plugins: [require("daisyui")],
};
