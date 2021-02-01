import { useEffect, useState } from "react"

export const MODE_DARK = "dark"
export const MODE_LIGHT = "light"

const getColorMode = () => {
  // Check local storage for color mode. Check for localStorage so build
  // doesn't fail on Netlify.
  if (localStorage) {
    const persistedColorPreference = localStorage.getItem("color-mode")

    if (persistedColorPreference) {
      return persistedColorPreference
    }
  }

  // Check for color mode OS preference.
  const mql = matchMedia("(prefers-color-scheme: dark)")

  if (typeof mql.matches === "boolean") {
    return mql.matches ? MODE_DARK : MODE_LIGHT
  } else {
    // Use dark color mode as default.
    return MODE_DARK
  }
}

const useColorMode = () => {
  const [colorMode, setColorMode] = useState(getColorMode)

  useEffect(() => {
    // Persist to local storage. Check for localStorage so build doesn't
    // fail on Netlify.
    if (localStorage) {
      localStorage.setItem("color-mode", colorMode)
    }

    // Add appropriate color class to HTML tag.
    document.documentElement.classList.add(colorMode)

    // Remove opposite color class from HTML tag.
    document.documentElement.classList.remove(
      colorMode === MODE_DARK ? MODE_LIGHT : MODE_DARK
    )
  }, [colorMode, setColorMode])

  return [colorMode, setColorMode]
}

export default useColorMode
