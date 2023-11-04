/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "soft-blue": "hsl(215, 51%, 70%)",
        "cyan-tail": "hsl(178, 100%, 50%)",
        "cyan-bg": "hsl(178, 100%, 38%)",
        "very-dark-blue": "hsl(217, 54%, 11%)",
        "very-dark-blue-modi": "hsl(216, 50%, 16%)",
        "very-dark-line": "hsl(215, 32%, 27%)",
      },
      fontFamily: {
        "default-ff": "Outfit, sans-serif",
      },
    },
  },
  plugins: [],
};
