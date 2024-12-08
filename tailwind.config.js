/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        primaryText: "white",
        secondarGrey: "gray",
        bgAmber: "#FFC100",
        multiBrown: "#BE6E46",
        primary2Black: "#040303",
      },
    },
  },
  plugins: [],
};
