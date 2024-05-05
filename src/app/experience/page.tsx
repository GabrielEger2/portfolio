'use client'

import ParallaxImage from '@/components/experience/ParallaxImage'
import { educations } from '@/content/education/EducationContent'

const education = () => {
  return (
    <div className="mt-14">
      {educations.map((education, index) => (
        <div key={index}>
          <div className="relative min-h-screen">
            <ParallaxImage
              imgUrl={education.image}
              subheading={education.subTitle}
              heading={education.Title}
            />
          </div>
          {education.chield}
        </div>
      ))}
    </div>
  )
}

export default education
