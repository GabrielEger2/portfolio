'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { BiLink } from 'react-icons/bi'
import ProjectsParallax from './ProjectsParallax'

const Hero = () => {
  const targetRefImage = useRef(null)
  const targetRef = useRef(null)
  const { scrollYProgress: scrollYImageProgress } = useScroll({
    target: targetRefImage,
    offset: ['end end', 'end start'],
  })
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [500, -500])
  const opacityImage = useTransform(scrollYImageProgress, [0, 1], [1, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0])

  return (
    <div className="flex relative min-h-screen overflow-hidden mx-4">
      <motion.div
        style={{
          y,
          opacity,
        }}
        ref={targetRef}
        className="flex h-screen w-[30%] flex-col items-start justify-end space-y-6 py-6"
      >
        <p className="text-4xl font-bold md:text-7xl">
          Explore All the Projects I&apos;ve Built so Far
        </p>
        <Link
          href="https://github.com/GabrielEger2"
          target="_blank"
          className="btn btn-lg text-xl font-bold btn-primary"
        >
          GitHub Link <BiLink className="inline-block" size={30} />
        </Link>
      </motion.div>
      <div className="w-[70%]">
        <ProjectsParallax />
      </div>
    </div>
  )
}

export default Hero
