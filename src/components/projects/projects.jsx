import React from "react"
import Project from "./project"
import projectsData from "./projects-data.json"

const Projects = () => (
  <section className="block">
    <h2>Projects</h2>
    {projectsData.map((p) => (
      <Project key={p.id} {...p} />
    ))}
  </section>
)

export default Projects
