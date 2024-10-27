'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import FlipCard from '../layout/FlipCard'

interface Course {
  courseImage: string
  courseTitle: string
  courseDescription: string
  courseTags: string[]
  tags: string[]
}

const Self = () => {
  const t = useTranslations('experience.self')

  const [searchTerm, setSearchTerm] = useState('')
  const [searchTag, setSearchTag] = useState('')

  const filteredCourses = t
    .raw('courses.courses')
    .filter(
      (course: Course) =>
        course.courseTitle.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (course.tags.includes(searchTag) || searchTag === ''),
    )

  return (
    <div className="max-w-7xl w-full min-h-screen mx-auto justify-center px-2 mb-10 md:mb-0">
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
            <select
              onChange={(event) => setSearchTag(event.target.value)}
              className="select select-primary md:w-full md:max-w-xs rounded-l-none"
              defaultValue={''}
            >
              <option value={''}>All Options</option>
              {t.raw('courses.courseTags').map((tag: string, index: number) => (
                <option key={index} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </label>
      </div>
      <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
        {filteredCourses.map((course: Course, index: number) => (
          <motion.div
            key={index}
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.25 }}
          >
            <AnimatePresence>
              <div className="flex justify-center">
                <FlipCard
                  courseImage={course.courseImage}
                  courseTitle={course.courseTitle}
                  courseDescription={course.courseDescription}
                  courseTags={course.courseTags}
                  tags={course.tags}
                />
              </div>
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Self
