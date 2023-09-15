// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': { 'min': '320px', 'max': '480px' },
      'tablet': { 'min': '481px', 'max': '768px' },
      'laptop': { 'min': '769px', 'max': '1024px' },
      'xlaptop': { 'min': '1025px', 'max': '1441px' },
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [],
};