const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    fontFamily: {
      sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
      serif: ["Nunito", ...defaultTheme.fontFamily.serif],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          light: "#405178",
          DEFAULT: "#12294C",
          dark: "#000024",
        },
        base: {
          light: "#F7F8FA",
          DEFAULT: "#ffffff",
          dark: "#EBF0F5",
        },
        tulip: {
          light: "#ffe166",
          DEFAULT: "#EDAF34",
          dark: "#b68000",
        },
        carrot: {
          light: "#EF9F53",
          DEFAULT: "#EB8729",
          dark: "#A45E1C",
        },
        royal: {
          light: "#bdbdf5",
          DEFAULT: "#4949E3",
          dark: "#0020b0",
        },
      },
    },
  },
  safelist: [
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'grid-cols-5',
    'grid-cols-6',
    'grid-cols-8',
    'grid-cols-10',
    'md:grid-cols-2',
    'md:grid-cols-3',
    'md:grid-cols-4',
    'md:grid-cols-5',
    'md:grid-cols-6',
    'md:grid-cols-8',
    'md:grid-cols-10',
    'max-h-[370px]'
  ]
};
