import React from "react"

const Project = ({ name, uri, description, tech }) => (
  <div className="mb-6 md:mb-8">
    <a href={uri}>
      <h3 className="mb-1">{name}</h3>
    </a>
    <p className="mb-1">{description}</p>
    <ul className="flex text-xs text-gray-600">
      {tech.map((t) => (
        <li className="mr-3">{t}</li>
      ))}
    </ul>
  </div>
)

export default Project
