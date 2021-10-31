const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        "black-theme": "#353535",
        "gray-500-theme": "#8d8d8d",
        "gray-100-theme": "#efefef",
        "white-theme": "#f8f8f8"
      },
      fontFamily: {
        "palanquin": "Palanquin, sans-serif",
        "roboto": "Roboto, sans-serif"
      }
    },
  },

  plugins: [],
};

module.exports = config;

