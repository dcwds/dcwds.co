import { useEffect, useState } from "react"

const useColorMode = () => {
  const [colorMode, setColorMode] = useState("dark")

  useEffect(() => {
    // Check for window so Gatsby doesn't fail on build.
    if (typeof window !== "undefined") {
      // Persist to local storage.
      window.localStorage.setItem("color-mode", colorMode)
    }

    document.documentElement.classList.add(colorMode)

    document.documentElement.classList.remove(
      colorMode === "dark" ? "light" : "dark"
    )
  }, [colorMode, setColorMode])

  return [colorMode, setColorMode]
}

export default useColorMode
