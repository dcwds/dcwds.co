import { useState } from "react"

const getColorMode = () => {
  // Check for window so Gatsby doesn't fail on build.
  if (typeof window !== "undefined") {
    const persistedColorMode = window.localStorage.getItem("color-mode")
    const preferredColorMode = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light"

    if (persistedColorMode) {
      return persistedColorMode
    } else if (!persistedColorMode && preferredColorMode) {
      return preferredColorMode
    } else {
      // Default to dark color mode.
      return "dark"
    }
  }
}

const useColorMode = () => {
  const [colorMode, setColorMode] = useState(getColorMode)

  return [colorMode, setColorMode]
}

export default useColorMode
