import { useTranslations } from 'next-intl'
import ScrollCard from '../layout/ScrollCard'
import TimeLine from './TimeLine'

interface FormalExperience {
  image: string
  title: string
  time: string
  local: string
  description: string
  technologies: string[]
}

const Formal = () => {
  const t = useTranslations('experience.formal')

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen justify-between">
      <div className="w-full md:w-1/2">
        {t.raw('experiences').map((formal: FormalExperience, index: number) => {
          return <ScrollCard key={index} {...formal} index={index} />
        })}
      </div>
      <div className="w-full md:w-1/2">
        <div className="sticky top-12 z-10">
          <div className="flex md:h-screen pb-12 md:pb-0 items-center justify-center md:text-end">
            <TimeLine experiences={t.raw('formalTimeLine')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Formal
