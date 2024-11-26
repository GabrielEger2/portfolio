import BackDevOpsBlock from '@/components/home/BackDevOpsBlock'
import ContactBlock from '@/components/home/ContactBlock'
import ExperiencesBlock from '@/components/home/ExperiencesBlock'
import FrontEndBlock from '@/components/home/FrontEndBlock'
import Hero from '@/components/home/Hero'
import {
  MapBlock,
  SquarePhoto,
  VerticalImage,
} from '@/components/home/ImageBlocks'
import PageBlock from '@/components/home/PageBlock'
import ProjectsBlock from '@/components/home/ProjectsBlock'
import SocialsBlock from '@/components/home/SocialsBlock'
import { AboutBlock, HeaderBlock } from '@/components/home/TextBlocks'

const Page = () => {
  return (
    <div>
      <Hero />
      <div className="min-h-screen px-4 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-1 sm:gap-4 mt-10">
          <VerticalImage />
          <HeaderBlock />
          <SocialsBlock />
          <ExperiencesBlock />
          <AboutBlock />
          <ProjectsBlock />
          <SquarePhoto />
          <MapBlock />
          <FrontEndBlock />
          <PageBlock />
          <BackDevOpsBlock />
          <ContactBlock />
        </div>
      </div>
    </div>
  )
}

export default Page
