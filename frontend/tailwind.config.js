// tailwind.config.js

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
      'xlaptop': { 'min': '1025px', 'max': '1920px' },
    },
    extend: {
      colors: {
        'orange-accent': '#DF6951',
      },
    },
  },
  darkMode: "class",
  plugins: [],
};