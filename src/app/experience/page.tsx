'use client'

import ParallaxImage from '@/components/experience/ParallaxImage'
import { experiences } from '@/content/experience/ExperienceContent'

const experience = () => {
  return (
    <div className="mt-14">
      {experiences.map((experience, index) => (
        <div key={index}>
          <div className="relative min-h-screen">
            <ParallaxImage
              imgUrl={experience.image}
              subheading={experience.subTitle}
              heading={experience.Title}
            />
          </div>
          {experience.child}
        </div>
      ))}
    </div>
  )
}

export default experience
