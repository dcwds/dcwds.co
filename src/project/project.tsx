type ProjectProps = {
  id: number
  name: string
  uri: string
  description: string
  tech: string[]
}

const Project = ({ name, uri, description, tech }: ProjectProps) => (
  <div className="mb-6 md:mb-8">
    <a href={uri}>
      <h3 className="mb-1">{name}</h3>
    </a>
    <p className="mb-1">{description}</p>
    <ul className="flex text-xs">
      {tech.map((t) => (
        <li className="mr-3">{t}</li>
      ))}
    </ul>
  </div>
)

export default Project
