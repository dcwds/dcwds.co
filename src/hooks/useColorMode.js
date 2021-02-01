import { useEffect, useState } from "react"

export const MODE_DARK = "dark"
export const MODE_LIGHT = "light"

const getColorMode = () => {
  // Check for window so Gatsby doesn't fail on build.
  if (typeof window !== "undefined") {
    // Check local storage for color mode.
    const persistedColorMode = window.localStorage.getItem("color-mode")

    if (persistedColorMode) {
      return persistedColorMode
    }

    // Check for color mode OS preference.
    const mql = window.matchMedia("(prefers-color-scheme: dark)")

    if (typeof mql.matches === "boolean") {
      return mql.matches ? MODE_DARK : MODE_LIGHT
    } else {
      // Use dark color mode as default.
      return MODE_DARK
    }
  }
}

const useColorMode = () => {
  const [colorMode, setColorMode] = useState(getColorMode)

  useEffect(() => {
    // Check for window so Gatsby doesn't fail on build.
    if (typeof window !== "undefined") {
      // Persist to local storage.
      window.localStorage.setItem("color-mode", colorMode)
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
