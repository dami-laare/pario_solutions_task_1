/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ProductSans: ["ProductSans", "sans-serif"],
      },
      colors: {
        primary: {
          1: "#4E598C",
          2: "#817E9E",
        },
        border: {
          1: "#4E598C",
        },
        gray: {
          1: "#F7F7FF",
          2: "#BDBDBD",
        },
        active: {
          1: "#F2994A",
        },
      },
    },
  },
  plugins: [],
};
