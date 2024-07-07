import Hero from '@/components/projects/Hero'
import { ProjectsCarousel } from '@/components/projects/ProjectsCarousel'

const projects = () => {
  return (
    <section className="w-full flex-col items-center">
      <div className="relative w-full h-[200vh]">
        <Hero />
      </div>
      <ProjectsCarousel />
    </section>
  )
}

export default projects
