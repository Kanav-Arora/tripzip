// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            mobile: { min: "320px", max: "480px" },
            tablet: { min: "481px", max: "768px" },
            laptop: { min: "769px", max: "1024px" },
            xlaptop: { min: "1025px", max: "1920px" },
        },
        extend: {
            colors: {
                orangeaccent: "#DF6951",
                matteBlack: "#222222",
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
