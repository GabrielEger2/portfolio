'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { BiLink } from 'react-icons/bi'
import ProjectsParallax from './ProjectsParallax'

const Hero = () => {
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
          className="flex h-screen w-full flex-col items-start justify-end sticky top-0 pb-4"
        >
          <p className="text-4xl font-bold md:text-7xl">
            Explore All the Projects I&apos;ve Built so Far
          </p>
          <Link
            href="https://github.com/GabrielEger2"
            target="_blank"
            className="btn btn-lg text-xl font-bold btn-primary mt-4"
          >
            GitHub Link <BiLink className="inline-block" size={30} />
          </Link>
        </motion.div>
        <motion.div
          style={{ opacity: opacityFadeIn }}
          className="flex h-screen w-full flex-col items-start justify-center sticky top-0 pb-4"
        >
          <p className="text-4xl font-bold md:text-8xl">塵も積もれば山となる</p>
          <p className="text-1xl font-semibold md:text-3xl mt-12">
            - Even dust if piled can become a mountain
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
