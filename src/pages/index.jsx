import React from "react"
import Layout from "../components/layout"
import About from "../components/about"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <main>
      <section className="py-8 md:py-24">
        <h1 className="font-semibold md:font-medium text-gray-800">
          Hello! I'm Dalton, a front-end developer based in{" "}
          <span role="img" aria-label="pine tree">
            🌲
          </span>{" "}
          Virginia, US. I enjoy working with React.
        </h1>
      </section>
      <Projects />
      <About />
    </main>
  </Layout>
)

export default IndexPage
