/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      EB: "Reenie Beanie",
      PF: "Playfair Display",
      CA: "Caveat",
      Rancho: "Rancho",
      CO: "Chela One",
    },
    screens: {
      sm: "360px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  extend: {},
  plugins: [],
};
