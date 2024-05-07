import { BiSolidCheckCircle } from 'react-icons/bi'

interface Experience {
  time: string
  title: string
  local: string
  position: string
}

interface TimeLineProps {
  experiences: Experience[]
}

const TimeLine = ({ experiences }: TimeLineProps) => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <div className="timeline-start md:text-end mb-10" />
        <hr />
      </li>
      {experiences?.map((experience, index: number) => (
        <li key={index}>
          <hr />
          <div className="timeline-middle">
            <BiSolidCheckCircle size={20} />
          </div>
          <div
            className={`${index % 2 === 0 ? 'timeline-start' : 'timeline-end'} mb-10`}
          >
            <time className="font-mono italic text-sm">{experience.time}</time>
            <h1 className="font-black">{experience.title}</h1>
            <p>{experience.local}</p>
            <p>{experience.position}</p>
          </div>
          <hr />
        </li>
      ))}
      <li>
        <hr />
        <div className="timeline-start md:text-end mb-10" />
      </li>
    </ul>
  )
}

export default TimeLine
