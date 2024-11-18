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
      <div className="w-[30%]">
        <motion.div
          style={{ opacity: opacityFadeOut, y: yFadeOut }}
          className="flex h-screen w-full flex-col items-start justify-end sticky top-0 pb-20"
        >
          <p className="text-4xl font-bold md:text-7xl">{t('title')}</p>
          <Link
            href={t('githubLink')}
            target="_blank"
            className="btn btn-lg text-xl font-bold btn-primary mt-4"
          >
            {t('github')} <BiLink className="inline-block" size={30} />
          </Link>
        </motion.div>
        <motion.div
          style={{ opacity: opacityFadeIn }}
          className="flex h-screen w-full flex-col items-start justify-center sticky top-0 pb-4"
        >
          <p className="text-4xl font-bold md:text-8xl">
            {t('japanesePhrase')}
          </p>
          <p className="text-1xl font-semibold md:text-3xl mt-12">
            {t('japaneseTranslation')}
          </p>
        </motion.div>
      </div>
      <div className="w-[70%]">
        <ProjectsParallax scrollYProgress={scrollYProgress} />
      </div>
    </div>
  )
}

export default Hero
