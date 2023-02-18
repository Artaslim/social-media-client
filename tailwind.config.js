/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        socialtheme: {
          primary: "#8C2641",
          secondary: "#F7F4FC",
          accent: "#43464B",
          neutral: "#ED5EDF",
          info: "#FBE0D7",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
