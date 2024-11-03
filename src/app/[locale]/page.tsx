import ExperiencesBlock from '@/components/home/ExperiencesBlock'
import FrontEnd from '@/components/home/FrontEnd'
import Hero from '@/components/home/Hero'
import {
  MapBlock,
  SquarePhoto,
  VerticalImage,
} from '@/components/home/ImageBlocks'
import ProjectsBlock from '@/components/home/ProjectsBlock'
import SocialsBlock from '@/components/home/SocialsBlock'
import { AboutBlock, HeaderBlock } from '@/components/home/TextBlocks'

const Page = () => {
  return (
    <div>
      <Hero />
      <div className="min-h-screen px-4 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-4 ">
          <VerticalImage />
          <HeaderBlock />
          <SocialsBlock />
          <ExperiencesBlock />
          <AboutBlock />
          <ProjectsBlock />
          <SquarePhoto />
          <MapBlock />
          <FrontEnd />
        </div>
      </div>
    </div>
  )
}

export default Page
