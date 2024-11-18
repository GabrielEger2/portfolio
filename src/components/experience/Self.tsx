'use client'

import { useTranslations } from 'next-intl'
import FilteredList from '../layout/FilteredList'
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

  const courses: Course[] = t.raw('courses.courses')
  const coursesTags = t.raw('courses.courseTags')

  const filterFunction = (course: Course, searchTerm: string, searchTag: string) =>
    course.courseTitle.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (searchTag === '' || course.tags.includes(searchTag))

  return (
    <FilteredList
      items={courses}
      filterFunction={filterFunction}
      renderItem={(course) => <FlipCard {...course} />}
      filterTags={coursesTags}
      labelText="Courses and Certificates Filter:"
      placeholderText="Search for a course or certificate..."
      getKey={(course) => course.courseTitle}
    />
  )
}

export default Self
