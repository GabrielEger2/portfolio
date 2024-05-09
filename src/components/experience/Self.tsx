import { courses } from '@/content/experience/SelfExperience'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import FlipCard from '../layout/FlipCard'

interface courses {
  projectTitle: string
  projectDescription: string
  projectTechStack: string
  projectGithubLink: string
  projectWebLink: string
}

const Self = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCourses = courses.filter((course) =>
    course.projectTitle.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="max-w-7xl w-full min-h-screen mx-auto justify-center px-2">
      <div className="mb-10">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Courses and Certificates Filter:</span>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Search for a course or certificate..."
              className="input input-bordered w-full rounded-r-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select className="select select-primary w-full max-w-xs rounded-l-none">
              <option selected>All Stacks</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>UI/UX</option>
              <option>WebDev</option>
            </select>
          </div>
        </label>
      </div>
      <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
        {filteredCourses.map((element: courses) => {
          return (
            <motion.div
              key={element.projectTitle}
              layout
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.25 }}
            >
              <AnimatePresence>
                <div className="flex justify-center">
                  <FlipCard />
                </div>
              </AnimatePresence>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Self
