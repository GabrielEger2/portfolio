import Formal from '@/components/experience/Formal'
import ParallaxImage from '@/components/experience/ParallaxImage'
import Self from '@/components/experience/Self'
import Work from '@/components/experience/Work'
import { useTranslations } from 'next-intl'

interface ExperienceItem {
  image: string
  subTitle: string
  title: string
  child: 'Work' | 'Formal' | 'Self'
}

const Experience = () => {
  const t = useTranslations()

  const experiences = t.raw('experience') as Record<string, ExperienceItem>

  const componentMapping: Record<string, React.ComponentType> = {
    Work,
    Formal,
    Self,
  }

  return (
    <section>
      {Object.values(experiences).map((experience, index) => {
        const ChildComponent = componentMapping[experience.child]

        return (
          <div key={index}>
            <div className="relative min-h-screen">
              <ParallaxImage
                imgUrl={experience.image}
                subheading={experience.subTitle}
                heading={experience.title}
              />
            </div>
            <div className="max-w-7xl w-full min-h-screen mx-auto justify-center px-2">
              <ChildComponent />
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Experience
