import ScrollCard from '../layout/ScrollCard'
import TimeLine from './TimeLine'

import { workExperiences } from '@/content/experience/WorkExperience'

const Work = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen items-center justify-between">
      <TimeLine />
      <div className="w-full md:w-1/2 space-y-4">
        {workExperiences.map((work, index) => {
          return <ScrollCard key={index} {...work} />
        })}
      </div>
    </div>
  )
}

export default Work
