const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    colors: {
      primary: "#00bcd4",
    },
    fontFamily: {
      sans: ["Trebuchet MS", "sans-serif"],
    },
  },
  plugins: [],
};
