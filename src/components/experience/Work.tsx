import ScrollCard from '../layout/ScrollCard'
import TimeLine from './TimeLine'

import { workExperiences } from '@/content/experience/WorkExperience'

const Work = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen justify-between">
      <div className="w-full md:w-1/2">
        <div className="sticky top-0 z-10">
          <div className="flex h-screen items-center justify-center">
            <TimeLine />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        {workExperiences.map((work, index) => {
          return (
            <div
              key={index}
              className="sticky z-10"
              style={{ top: `calc(-5vh + ${index * 25}px)` }}
            >
              <ScrollCard {...work} index={index} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Work
