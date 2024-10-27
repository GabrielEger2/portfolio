import { useTranslations } from 'next-intl'
import ScrollCard from '../layout/ScrollCard'
import TimeLine from './TimeLine'

interface WorkExperience {
  image: string
  title: string
  time: string
  local: string
  description: string
  technologies: string[]
}

const Work = () => {
  const t = useTranslations('experience.work')

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen justify-between">
      <div className="w-full md:w-1/2">
        <div className="sticky top-12 z-10">
          <div className="flex md:h-screen items-center justify-center">
            <TimeLine experiences={t.raw('workTimeLine')} />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        {t.raw('experiences').map((work: WorkExperience, index: number) => (
          <ScrollCard key={index} {...work} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Work
