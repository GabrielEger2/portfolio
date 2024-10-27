import { useTranslations } from 'next-intl'
import ScrollCard from '../layout/ScrollCard'
import TimeLine from './TimeLine'

const Formal = () => {
  const t = useTranslations('experience.formal')

  const experiencesData = [{ key: 'experience1' }, { key: 'experience2' }]

  const educationExperiences = experiencesData.map(({ key }) => ({
    image: t(`experiences.${key}.image`),
    title: t(`experiences.${key}.title`),
    time: t(`experiences.${key}.time`),
    local: t(`experiences.${key}.local`),
    description: t(`experiences.${key}.description`),
    technologies: null,
  }))

  const educationTimelineKeys = [
    'timeLine1',
    'timeLine2',
    'timeLine3',
    'timeLine4',
  ]
  const educationTimeline = educationTimelineKeys.map((key) => ({
    title: t(`formalTimeLine.${key}.title`),
    time: t(`formalTimeLine.${key}.time`),
    local: t(`formalTimeLine.${key}.local`),
    position: t(`formalTimeLine.${key}.position`),
  }))

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen justify-between">
      <div className="w-full md:w-1/2">
        {educationExperiences.map((work, index) => {
          return <ScrollCard key={index} {...work} index={index} />
        })}
      </div>
      <div className="w-full md:w-1/2">
        <div className="sticky top-12 z-10">
          <div className="flex h-screen items-center justify-center md:text-end">
            <TimeLine experiences={educationTimeline} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Formal
