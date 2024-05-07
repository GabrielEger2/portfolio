import ScrollCard from '../layout/ScrollCard'
import TimeLine from './TimeLine'

import {
  educationExperiences,
  educationTimeline,
} from '@/content/experience/EducationExperience'

const Formal = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen justify-between">
      <div className="w-full md:w-1/2">
        {educationExperiences.map((work, index) => {
          return <ScrollCard key={index} {...work} index={index} />
        })}
      </div>
      <div className="w-full md:w-1/2">
        <div className="sticky top-0 z-10">
          <div className="flex h-screen items-center justify-center md:text-end">
            <TimeLine experiences={educationTimeline} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Formal
