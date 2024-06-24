import ParallaxImage from '@/components/experience/ParallaxImage'
import { experiences } from '@/content/experience/ExperienceContent'

const experience = () => {
  return (
    <section>
      {experiences.map((experience, index) => (
        <div key={index}>
          <div className="relative min-h-screen">
            <ParallaxImage
              imgUrl={experience.image}
              subheading={experience.subTitle}
              heading={experience.Title}
            />
          </div>
          <div className="max-w-7xl w-full min-h-screen mx-auto justify-center px-2">
            {experience.child}
          </div>
        </div>
      ))}
    </section>
  )
}

export default experience
