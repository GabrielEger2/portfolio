import { motion, MotionValue } from 'framer-motion'
import Link from 'next/link'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubLink: string
}

interface ParallaxColumnProps {
  projects: Project[]
  y: MotionValue<number>
}

const ParallaxColumn: React.FC<ParallaxColumnProps> = ({ projects, y }) => {
  return (
    <motion.div className="flex gap-4 w-1/3 min-w-96 flex-col" style={{ y }}>
      {projects.map((project, index) => {
        return (
          <div
            key={index}
            className="card p-10 border border-base-300 shadow-lg"
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-semibold underline">
                  {project.title}
                </h1>
                <p className="mt-6 text-lg">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{project.description}
                </p>
              </div>
              <div className="flex flex-col">
                <div className="space-x-1 my-3">
                  {project.technologies.map((technology, index) => {
                    return (
                      <div key={index} className="badge badge-secondary">
                        {technology}
                      </div>
                    )
                  })}
                </div>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="btn btn-secondary btn-outline"
                >
                  Github Link
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </motion.div>
  )
}
export default ParallaxColumn
