const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        "black-theme": "#353535",
        "gray-500-theme": "#8d8d8d",
        "gray-100-theme": "#efefef",
        "white-theme": "#f8f8f8",
        "grass-theme": "#9DCFAB",
        "psy-theme": "#B55EC3",
        "water-theme": "#6D8FE4",
        "poison-theme": "#AD9DCF",
        "fire-theme": "#E7B88D",
        "electric-theme": "#E1DE87",
        "rock-theme": "#8A8A8A",
        "fighting-theme": "#DD6F6F",
        "ground-theme": "#B07035",
        "bug-theme": "#C2DD76",
        "ghosts-theme": "#E46DAE",
        "flying-theme": "#6DC8E4",
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

