import React from "react"
import useColorMode from "../../hooks/useColorMode"

import DarkModeIcon from "../../assets/moon.svg"
import LightModeIcon from "../../assets/sun.svg"
import GitHubIcon from "../../assets/github-logo.svg"
import TwitterIcon from "../../assets/twitter-logo.svg"

const Header = () => {
  const [colorMode, setColorMode] = useColorMode()

  const toggleColorMode = () => {
    const newColorMode = colorMode === "dark" ? "light" : "dark"

    setColorMode(newColorMode)
  }

  return (
    <header className="flex justify-between items-center py-4 md:py-8">
      <a href="/">
        <p className="font-semibold text-gray-900 dark:text-white">dcwds</p>
      </a>

      <ul className="flex items-center space-x-3">
        <li>
          <a className="icon" href="https://twitter.com/daltonwoods">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a className="icon" href="https://github.com/dcwds">
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a className="btn block" href="/">
            Resume
          </a>
        </li>
        <li>
          <button onClick={toggleColorMode}>
            {colorMode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </button>
        </li>
      </ul>
    </header>
  )
}

export default Header
