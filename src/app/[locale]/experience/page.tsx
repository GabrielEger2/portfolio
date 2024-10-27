import Formal from '@/components/experience/Formal'
import ParallaxImage from '@/components/experience/ParallaxImage'
import Self from '@/components/experience/Self'
import Work from '@/components/experience/Work'
import { useTranslations } from 'next-intl'

const Experience = () => {
  const t = useTranslations('experience')

  const experiences = [
    {
      image: t('work.image'),
      subTitle: t('work.subTitle'),
      title: t('work.title'),
      child: <Work />,
    },
    {
      image: t('formal.image'),
      subTitle: t('formal.subTitle'),
      title: t('formal.title'),
      child: <Formal />,
    },
    {
      image: t('self.image'),
      subTitle: t('self.subTitle'),
      title: t('self.title'),
      child: <Self />,
    },
  ]

  return (
    <section>
      {experiences.map((experience, index) => (
        <div key={index}>
          <div className="relative min-h-screen">
            <ParallaxImage
              imgUrl={experience.image}
              subheading={experience.subTitle}
              heading={experience.title}
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

export default Experience
