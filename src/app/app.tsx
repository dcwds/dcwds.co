import Header from "../header"
import Project from "../project"
import projects from "../project/projects.json"

const App = () => (
  <div className="mx-auto p-6 md:max-w-3xl">
    <Header />

    <div className="py-8 md:py-24">
      <h1 className="font-medium text-gray-800">
        Hello! I'm Dalton, a front-end developer based in 🌲 Virginia, US. I
        enjoy working with React.
      </h1>
    </div>

    <div className="py-6">
      <h2 className="mb-6 md:mb-8">Projects</h2>
      {projects.map((p) => (
        <Project key={p.id} {...p} />
      ))}
    </div>

    <div className="py-6">
      <h2 className="mb-6 md:mb-8">About</h2>
      <div className="content-block text-sm md:grid grid-cols-2 gap-6">
        <div>
          <p>
            I started building websites on a dial-up connection when I was 13
            years old.
          </p>

          <p>
            I landed my first job in 2009 as a web designer for a small agency
            in California which had later become a web-based productivity SaaS
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
            A lot of my growth as a front-end developer happened at Glip, where
            I was expected to implement my design work into our product.
          </p>

          <p>
            In the subsequent years after Glip was acquired in late 2015, I had
            the opportunity to further develop my front-end skills through
            small, personal projects.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default App
