const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      blue: colors.blue,
      gray: colors.blueGray,
      darkGray: colors.coolGray,
      yellow: colors.amber,
      purple: colors.indigo,
      white: colors.white,
      black: colors.black,
      dark: "#161c22",
    },
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.5rem"],
      base: ["1rem", "1.75rem"],
      lg: ["1.125rem", "2rem"],
      xl: ["1.25rem", "2.25rem"],
      xxl: ["2rem", "1.75"],
    },
    fill: (theme) => ({
      gray: theme("colors.gray.400"),
      blue: theme("colors.blue.500"),
      yellow: theme("colors.yellow.300"),
      purple: theme("colors.purple.400"),
    }),
    stroke: (theme) => ({
      gray: theme("colors.gray.400"),
      yellow: theme("colors.yellow.300"),
      purple: theme("colors.purple.400"),
    }),
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
