/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        "gray-light": "#a1a1a1",
        "gray-dark": "#2a2a2a",
        gray: "#676767",
        black: "#1a1a1a",
        "black-dark": "#0b0b0b",
        "purple-light": "#8062ff",
        purple: "#5033c2",
      },
    },
  },
  plugins: [],
};
