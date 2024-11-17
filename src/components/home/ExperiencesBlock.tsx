import { BiSolidBriefcase } from 'react-icons/bi'
import { FaUniversity } from 'react-icons/fa'
import { PiCertificateFill } from 'react-icons/pi'
import Block from './Block'

const ExperiencesBlock = () => {
  return (
    <>
      <Block
        whileHover={{
          rotate: '1.5deg',
          scale: 1.05,
        }}
        className="col-span-3 row-span-1 flex flex-col justify-between p-6"
      >
        <div className="flex flex-col items-center">
          <BiSolidBriefcase size={30} />
          <h1 className="text-center text-lg font-semibold">Work Experience</h1>
        </div>
        <p className="mt-4">
          with 2 years of experience in the industry, I've worked with a variety
          of technologies and frameworks, from React to Angular, from Node to
          Django, from Docker to Kubernetes, from on-site webservers to
          serverless cloud.
        </p>
      </Block>
      <Block className="col-span-3 row-span-1 flex flex-col justify-between p-6">
        <div className="flex flex-col items-center">
          <FaUniversity size={30} />
          <h1 className="text-center text-lg font-semibold">
            Formal Education
          </h1>
        </div>
        <p className="mt-4">
          As much as I love to learn by doing, I also belive in the importance
          of formal education. I'm currently pursuing a degree in Information
          Systems at the PUC Minas University. I also graduated in IFSC in a
          high school technical course.
        </p>
      </Block>
      <Block className="col-span-3 row-span-1 flex flex-col justify-between p-6">
        <div className="flex flex-col items-center">
          <PiCertificateFill size={30} />
          <h1 className="text-center text-lg font-semibold">Self-Learning</h1>
        </div>
        <p className="mt-4">
          I'm always learning something new, be it a new language, a new
          framework, a new tool, or a new concept. I'm currently pursuing a
          second AWS certification, learning about Kubernetes and Docker, and
          improving my Japanese.
        </p>
      </Block>
    </>
  )
}

export default ExperiencesBlock
