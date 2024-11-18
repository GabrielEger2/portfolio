import { Link } from "@/i18n/routing"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubLink: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    technologies,
    githubLink
  }) => {

  return (
    <div className="card bg-base-100 shadow-xl border border-base-300">
      <div className="min-h-40 bg-primary flex justify-center items-center">
        <h2 className="text-primary-content text-2xl font-semibold underline">
          {title}
        </h2>
      </div>
      <div className="card-body">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {description}
        </p>
        <div className="space-x-1 mt-3">
          {
            technologies.map((technology, index) => (
              <div key={index} className="badge badge-primary">{technology}</div>
            ))
          }
        </div>
        <div className="mt-2 flex justify-end">
          <Link href={githubLink} className="btn btn-primary text-primary-content btn-outline">
            Github Link
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard