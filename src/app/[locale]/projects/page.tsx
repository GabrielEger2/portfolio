import Hero from '@/components/projects/Hero'
import { ProjectsCarousel } from '@/components/projects/ProjectsCarousel'
import {
  englishMetadata,
  japaneseMetadata,
  portugueseMetadata,
  spanishMetadata,
} from '@/metadata/projects'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}) {
  return params.locale === 'pt'
    ? portugueseMetadata
    : params.locale === 'es'
      ? spanishMetadata
      : params.locale === 'ja'
        ? japaneseMetadata
        : englishMetadata
}

const projects = () => {
  return (
    <section className="w-full flex-col items-center pt-16">
      <div className="relative w-full h-[200vh]">
        <Hero />
      </div>
      <ProjectsCarousel />
    </section>
  )
}

export default projects
