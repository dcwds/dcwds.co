import React from "react"

const About = () => (
  <section className="block">
    <h2>About</h2>
    <div className="paragraphs text-sm md:grid grid-cols-2 gap-6">
      <div>
        <p>
          I started building websites on a dial-up connection when I was 13
          years old.
        </p>

        <p>
          I landed my first job in 2009 as a web designer for a small agency in
          California which had later become a web-based productivity SaaS
          startup, Rule.fm, where I lead design.
        </p>
        <p>
          At Rule, I was solely responsible for branding, marketing sites, and
          the product UI for web and mobile. We were acquired in 2013 by the
          productivity SaaS startup, Glip.
        </p>
      </div>
      <div>
        <p>
          A lot of my growth as a front-end developer happened at Glip, where I
          was expected to implement my design work into our product.
        </p>

        <p>
          In the subsequent years after Glip was acquired in late 2015, I had
          the opportunity to further develop my front-end skills through small,
          personal projects.
        </p>
      </div>
    </div>
  </section>
)

export default About
