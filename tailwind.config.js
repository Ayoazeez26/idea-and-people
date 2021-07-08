module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bm: {
          bg: "#F9FAFB",
          text: "#6F7680",
          logo: "#EC4A39",
          hero: "#243141",
          btn: "#151719",
          head: "#0D1826",
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
