
module.exports = {
  content: [
    "./pages/**/**/*.{html,js}",
    "./components/**/*.{html,js}",

  ],
  theme: {
    extend: {
        colors: {
          primary: "#00bcd4",
        },
        fontFamily: {
          fuente_titulo: ["Trebuchet MS", "sans-serif"],
        },
        animation: {
          wiggle: 'wiggle 4s infinite;',
        },
        keyframes: {
          wiggle: {
            "50%": {
              shadow: ["10px_20px_30px_red"]
            },

          }
        },
        boxShadow: {
          sombra: '10px 20px 30px red',
        }
        
    },
  },
  plugins: [],
};
