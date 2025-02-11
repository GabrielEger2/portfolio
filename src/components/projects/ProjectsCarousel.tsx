'use client'

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useRef, useState } from 'react'
import { useWindowSize } from 'react-use'
import Projects from './Projects'

interface Project {
  title: string
  github: string
  githubLink: string
  image: string
  description: string
}

export const ProjectsCarousel = () => {
  const { width, height } = useWindowSize()
  const carouselWrapperRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ['start start', 'end start'],
  })

  const maximumScale = useMemo(() => {
    const windowYRatio = height / width
    const xScale = 1.66667
    const yScale = xScale * (16 / 9) * windowYRatio
    return Math.max(xScale, yScale)
  }, [width, height])

  const scale = useTransform(
    scrollYProgress,
    [0, 0.05, 0.3],
    [maximumScale * 1.1, maximumScale, 1],
  )

  const [carouselVariant, setCarouselVariant] = useState<'inactive' | 'active'>(
    'inactive',
  )

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (progress >= 0.31) {
      setCarouselVariant('active')
    } else {
      setCarouselVariant('inactive')
    }
  })

  const xVariant =
    width > 1300 ? 1900 / Math.min(1900, width) : width > 768 ? 1.47 : 1.52
  const xOffset = useMemo(
    () => `${Math.min(width * 0.68 * xVariant, 1310)}px`,
    [width, xVariant],
  )
  const x = useTransform(scrollYProgress, [0.31, 0.8], [xOffset, `-${xOffset}`])
  const t = useTranslations('projects')
  const projects = t.raw('projectsCarousel')

  return (
    <>
      <motion.div animate={carouselVariant}>
        <div ref={carouselWrapperRef} className="h-[600vh] overflow-clip">
          {carouselVariant === 'active' ? (
            <div className="sticky top-8 flex h-screen items-center">
              <motion.div
                style={{ x }}
                className="relative flex w-full justify-center gap-4"
              >
                {projects.map((project: Project, index: number) => {
                  return (
                    <motion.div
                      key={index}
                      className="relative aspect-[9/16] shrink-0 overflow-clip md:aspect-video w-full max-w-7xl"
                    >
                      <Image
                        className="h-full w-full object-cover card"
                        src={project.image}
                        alt={project.title}
                        width={1920}
                        height={1080}
                      />
                      <motion.div
                        variants={{
                          active: { opacity: 1 },
                          inactive: { opacity: 0 },
                        }}
                        className="absolute bottom-0 left-0 flex w-full flex-col items-center gap-4 p-3 md:flex-row md:justify-between md:gap-0"
                      >
                        <div className="z-10 bg-black bg-opacity-50 p-2 rounded-lg w-full md:w-3/4">
                          <h1 className="text-white z-10 md:text-lg lg:text-xl font-bold">
                            {project.title}
                          </h1>
                          <p className="text-white z-10 md:block">
                            {project.description}
                          </p>
                        </div>
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          className="btn btn-primary"
                        >
                          {project.github}
                        </Link>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          ) : (
            <div className="sticky top-8 flex h-screen items-center">
              <div className="relative flex w-full justify-center">
                <motion.div
                  style={{ scale }}
                  className="relative aspect-[9/16] shrink-0 overflow-clip md:aspect-video w-full max-w-7xl px-2"
                >
                  <Image
                    className="h-full w-full object-cover card"
                    src={projects[0].image}
                    alt={projects[0].title}
                    width={1920}
                    height={1080}
                  />
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
      <div className="translate-y-6 md:-translate-y-52 lg:-translate-y-24">
        <Projects />
      </div>
    </>
  )
}
