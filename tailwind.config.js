/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "30px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xl2: "1536px",
    },
    extend: {
      backgroundImage: {
        heroText: "url('/src/assets/img/accaro.svg')",
        blob: "url('/src/assets/img/blob.svg')",
      },
      colors: {
        primary: "#161515",
        accent: {
          DEFAULT: "#FD5956",
          hover: "#EB4441",
        },
        grey: "#5F5F5F",
        body: "#FFFEFD",
      },
    },
  },
  plugins: [],
};
