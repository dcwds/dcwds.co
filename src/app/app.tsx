import Header from "../header"
import Project from "../project"
import projects from "../project/projects.json"

const App = () => (
  <div className="mx-auto px-4 md:max-w-4xl">
    <Header />

    <div className="mt-12 md:mt-16">
      <p className="text-gray-800 text-lg md:text-2xl w-auto mb-12 md:mb-16 md:max-w-md">
        Hello, my name is Dalton. I'm a front-end developer based in 🌲
        Virginia, US.
      </p>
    </div>

    <div>
      <h2 className="mb-6 md:mb-8">Projects</h2>
      {projects.map((p) => (
        <Project key={p.id} {...p} />
      ))}
    </div>
  </div>
)

export default App
