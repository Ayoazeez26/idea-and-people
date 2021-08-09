module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bm: {
          bg: "#F9FAFB",
          text: "#5a6971",
          logo: "#EC4A39",
          hero: "#12130f",
          btn: "#1c6288",
          head: "#0D1826",
          yellow: "#F6BF69",
          yel: "#ffbe57",
          pri: "#E68D00",
          bus: "#F7CA17",
          fleet: "#71A1FA",
          dri: "#6AD011"
        },
      },
      screens: {
        'big': '1320px',
      },
      borderRadius: {
        '4xl': '20px',
        '5xl': '30px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
