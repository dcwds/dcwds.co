import React from "react"
import GitHubIcon from "../../assets/github-logo.svg"
import TwitterIcon from "../../assets/twitter-logo.svg"

const Header = () => (
  <header className="flex justify-between items-center py-4 md:py-8">
    <a href="/">
      <p className="font-semibold text-gray-900">dcwds</p>
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
    </ul>
  </header>
)

export default Header
