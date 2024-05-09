import ScrollCard from '../layout/ScrollCard'
import TimeLine from './TimeLine'

import {
  workExperiences,
  workTimeline,
} from '@/content/experience/WorkExperience'

const Work = () => {
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
        {workExperiences.map((work, index) => {
          return <ScrollCard key={index} {...work} index={index} />
        })}
      </div>
    </div>
  )
}

export default Work
