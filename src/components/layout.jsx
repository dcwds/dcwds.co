import React from "react"
import Helmet from "react-helmet"
import Header from "./header"
import "../styles/index.css"

const Layout = ({ children }) => (
  <div className="mx-auto p-6 md:max-w-3xl">
    <Helmet>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Helmet>

    <Header />
    {children}
  </div>
)

export default Layout
