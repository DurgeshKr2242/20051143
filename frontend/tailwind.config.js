/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Black: "#303030",
      },
      screens: {
        fourK: "2560px",
        laptopL: "1440px",
        laptop: "1024px",
        laptopS: "896px",
        tablet: "768px",
        tabletM: "624px",
        tabletS: "524px",
        mobileL: "425px",
        mobileM: "375px",
        mobileS: "320px",
        navBreakM: "547px",
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
  },
  plugins: [],
};
