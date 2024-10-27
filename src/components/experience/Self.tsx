'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import FlipCard from '../layout/FlipCard'

const Self = () => {
  const t = useTranslations('experience.courses')

  const [searchTerm, setSearchTerm] = useState('')
  const [searchTag, setSearchTag] = useState('')

  const coursesData = [
    { key: 'course1', courseTagsCount: 5, tagsCount: 2 },
    { key: 'course2', courseTagsCount: 4, tagsCount: 2 },
    { key: 'course3', courseTagsCount: 4, tagsCount: 2 },
    { key: 'course4', courseTagsCount: 6, tagsCount: 1 },
    { key: 'course5', courseTagsCount: 3, tagsCount: 1 },
    { key: 'course6', courseTagsCount: 7, tagsCount: 2 },
    { key: 'course7', courseTagsCount: 6, tagsCount: 2 },
    { key: 'course8', courseTagsCount: 4, tagsCount: 1 },
  ]

  const courses = coursesData.map(({ key, courseTagsCount, tagsCount }) => ({
    courseImage: t(`${key}.courseImage`),
    courseTitle: t(`${key}.courseTitle`),
    courseDescription: t(`${key}.courseDescription`),
    courseTags: Array.from({ length: courseTagsCount }, (_, i) =>
      t(`${key}.courseTags.tag${i + 1}`),
    ),
    tags: Array.from({ length: tagsCount }, (_, i) =>
      t(`${key}.tags.tag${i + 1}`),
    ),
  }))

  const coursesTags = Array.from({ length: 5 }, (_, i) =>
    t(`courseTags.tag${i + 1}`),
  )

  const filteredCourses = courses.filter(
    (course) =>
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
              {coursesTags.map((tag, index) => (
                <option key={index} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </label>
      </div>
      <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.courseTitle}
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
