import { BiSolidCheckCircle } from 'react-icons/bi'

const Formal = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen items-center justify-between">
      <div className="w-full md:w-1/2 flex justify-center">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-start md:text-end mb-10" />
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <BiSolidCheckCircle size={20} />
            </div>
            <div className="timeline-start mb-10">
              <time className="font-mono italic text-sm">2017 - 2021</time>
              <h1 className="font-black">Technical High School</h1>
              <h3>IFSC (Federal Institute of Santa Catarina)</h3>
              <p className="italic text-sm">GPA: 8.9 - 10</p>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <BiSolidCheckCircle size={20} />
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic text-sm">
                2023 - 2026 (Probably)
              </time>
              <h1 className="font-black">Bsc Computer Science</h1>
              <h3>GoldSmith - University of London</h3>
              <p className="italic text-sm">GPA: ????</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <BiSolidCheckCircle size={20} />
            </div>
            <div className="timeline-start mb-10">
              <time className="font-mono italic text-sm">
                2027 - 2028 (Probably)
              </time>
              <h1 className="font-black">Master in Computer Science</h1>
              <h3>????</h3>
              <p className="italic text-sm">GPA: ????</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <BiSolidCheckCircle size={20} />
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic text-sm">
                2029 - 2031 (Probably)
              </time>
              <h1 className="font-black">Phd Computer Science</h1>
              <h3>????</h3>
              <p className="italic text-sm">GPA: ????</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start md:text-end mb-10" />
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        Add animated scroll soon
      </div>
    </div>
  )
}

export default Formal
