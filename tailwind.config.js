module.exports = {
  content: ["./pages/**/**/*.{html,js,jsx}", "./components/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00bcd4",
      },
      fontFamily: {
        fuente_titulo: ["Trebuchet MS", "sans-serif"],
      },
      
     backgroundImage: theme =>({
       'foto': "url('/public/fondo1.svg')"
     })
    }
  },
  plugins: [],
};
