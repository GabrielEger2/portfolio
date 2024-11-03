'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { BiArrowFromRight, BiArrowToRight } from 'react-icons/bi'
import Block from './Block'

const projects = [
  { id: 1, title: 'Project One', description: 'Description of project one' },
  { id: 2, title: 'Project Two', description: 'Description of project two' },
  {
    id: 3,
    title: 'Project Three',
    description: 'Description of project three',
  },
]

const ProjectsBlock = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    )
  }

  return (
    <Block className="col-span-9 row-span-2">
      <div className="relative overflow-hidden w-full h-full card">
        <AnimatePresence>
          <motion.div
            key={projects[currentIndex].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full flex items-center justify-center bg-base-300"
          >
            <div className="text-center">
              <h3 className="text-2xl font-semibold">
                {projects[currentIndex].title}
              </h3>
              <p className="mt-2">{projects[currentIndex].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={handlePrev}
          className="btn btn-primary absolute left-4 top-1/2 -translate-y-1/2"
        >
          <BiArrowFromRight size={24} />
        </button>
        <button
          onClick={handleNext}
          className="btn btn-primary absolute right-4 top-1/2 -translate-y-1/2"
        >
          <BiArrowToRight size={24} />
        </button>
      </div>
    </Block>
  )
}

export default ProjectsBlock
