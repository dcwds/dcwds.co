import React from "react"
import Helmet from "react-helmet"
import Header from "./header"
import Footer from "./footer"
import gatsbyConfig from "../../gatsby-config"

const { siteMetadata } = gatsbyConfig

const Layout = ({ children }) => (
  <div className="antialiased mx-auto p-6 md:max-w-3xl">
    <Helmet>
      <title>{siteMetadata.title}</title>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Helmet>

    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
