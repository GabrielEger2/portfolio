import { useTranslations } from 'next-intl'
import ScrollCard from '../layout/ScrollCard'
import TimeLine from './TimeLine'

const Work = () => {
  const t = useTranslations('experience.work')

  const experiencesData = [
    { key: 'experience1', technologiesCount: 5 },
    { key: 'experience2', technologiesCount: 4 },
    { key: 'experience3', technologiesCount: 6 },
  ]

  const workExperiences = experiencesData.map(({ key, technologiesCount }) => ({
    image: t(`experiences.${key}.image`),
    title: t(`experiences.${key}.title`),
    time: t(`experiences.${key}.time`),
    local: t(`experiences.${key}.local`),
    description: t(`experiences.${key}.description`),
    technologies: Array.from({ length: technologiesCount }, (_, i) =>
      t(`experiences.${key}.technologies.${i}`),
    ),
  }))

  const workTimelineKeys = ['timeLine1', 'timeLine2', 'timeLine3']
  const workTimeline = workTimelineKeys.map((key) => ({
    title: t(`workTimeLine.${key}.title`),
    time: t(`workTimeLine.${key}.time`),
    local: t(`workTimeLine.${key}.local`),
    position: t(`workTimeLine.${key}.position`),
  }))

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen justify-between">
      <div className="w-full md:w-1/2">
        <div className="sticky top-12 z-10">
          <div className="flex md:h-screen items-center justify-center">
            <TimeLine experiences={workTimeline} />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        {workExperiences.map((work, index) => (
          <ScrollCard key={index} {...work} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Work
