import { courses } from '@/content/experience/SelfExperience'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

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
    <div className="max-w-7xl w-full min-h-screen mx-auto justify-center px-2 mb-10">
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
      <motion.div
        layout
        className="grid grid-cols-[repeat(auto-fit,minmax(300px,.5fr))] sm:grid-cols-[repeat(auto-fit,minmax(400px,.5fr))] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6"
      >
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
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                    />
                  </figure>
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
