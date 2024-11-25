'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRef } from 'react'
import { BiLink } from 'react-icons/bi'
import ProjectsParallax from './ProjectsParallax'

const Hero = () => {
  const t = useTranslations('projects.hero')

  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const yFadeOut = useTransform(scrollYProgress, [0, 0.34, 0.45], [0, 0, -300])
  const opacityFadeOut = useTransform(
    scrollYProgress,
    [0, 0.34, 0.45],
    [1, 1, 0],
  )
  const opacityFadeIn = useTransform(scrollYProgress, [0, 0.4, 0.6], [0, 0, 1])

  return (
    <div ref={targetRef} className="flex relative h-[200vh] mx-4">
      <div className="w-full md:w-[30%]">
        <motion.div
          style={{ opacity: opacityFadeOut, y: yFadeOut }}
          className="flex h-screen w-full flex-col items-center justify-center md:items-start md:justify-end sticky top-0 pb-20"
        >
          <p className="font-bold text-7xl text-center md:text-5xl md:text-start lg:text-6xl xl:text-7xl">
            {t('title')}
          </p>
          <Link
            href={t('githubLink')}
            target="_blank"
            className="btn btn-lg text-xl font-bold btn-primary mt-16 md:mt-4"
          >
            {t('github')} <BiLink className="inline-block" size={30} />
          </Link>
        </motion.div>
        <motion.div
          style={{ opacity: opacityFadeIn }}
          className="flex h-screen w-full flex-col items-center justify-center md:items-start sticky top-0 pb-4"
        >
          <p className="font-bold text-7xl text-center md:text-5xl md:text-start lg:text-6xl xl:text-7xl">
            {t('japanesePhrase')}
          </p>
          <p className="text-3xl font-semibold md:text-3xl mt-20 md:mt-12">
            {t('japaneseTranslation')}
          </p>
        </motion.div>
      </div>
      <div className="w-[70%] hidden md:block">
        <ProjectsParallax scrollYProgress={scrollYProgress} />
      </div>
    </div>
  )
}

export default Hero
