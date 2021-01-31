const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: colors.blue,
      gray: colors.blueGray,
    },
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.5rem"],
      base: ["1rem", "1.75rem"],
      lg: ["1.125rem", "2rem"],
      xl: ["1.25rem", "2.25rem"],
      xxl: ["2rem", "1.75"],
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
