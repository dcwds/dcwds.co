import React from "react"
import useColorMode from "../../hooks/useColorMode"

import DarkModeIcon from "../../assets/moon.svg"
import LightModeIcon from "../../assets/sun.svg"
import GitHubIcon from "../../assets/github-logo.svg"
import TwitterIcon from "../../assets/twitter-logo.svg"

const Header = () => {
  const [colorMode, setColorMode] = useColorMode()
  const nextColorMode = colorMode === "dark" ? "light" : "dark"

  const toggleColorMode = () => {
    setColorMode(nextColorMode)

    // Check for window so Gatsby doesn't fail on build.
    if (typeof window !== "undefined") {
      window.localStorage.setItem("color-mode", nextColorMode)

      document.documentElement.classList.add(nextColorMode)

      document.documentElement.classList.remove(
        nextColorMode === "dark" ? "light" : "dark"
      )
    }
  }

  return (
    <header className="flex justify-between items-center py-4 md:py-8">
      <a href="/">
        <p className="font-semibold text-gray-900 dark:text-white">dcwds</p>
      </a>

      <ul className="flex items-center space-x-3">
        <li>
          <a
            className="icon"
            href="https://twitter.com/daltonwoods"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a
            className="icon"
            href="https://github.com/dcwds"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a className="btn" href="/">
            Resume
          </a>
        </li>
        <li>
          <button
            className={`icon ${
              nextColorMode === "dark" ? "icon-dark" : "icon-light"
            }`}
            onClick={toggleColorMode}
            aria-label={`${nextColorMode} mode`}
          >
            {colorMode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </button>
        </li>
      </ul>
    </header>
  )
}

export default Header
