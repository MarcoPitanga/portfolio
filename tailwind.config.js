/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#64ffda",
        background: "#0a192f",
        background2: "#081020",
        background3: "#030712",
      },
      backgroundImage: {
        texture: "url('http://web-features.net/patterns/14.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
