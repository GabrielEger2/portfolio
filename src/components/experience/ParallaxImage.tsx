'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxImageProps {
  imgUrl: string
  subheading: string
  heading: string
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  imgUrl,
  subheading,
  heading,
}) => {
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

  const scale = useTransform(scrollYImageProgress, [0, 1], [1, 0.85])
  const y = useTransform(scrollYProgress, [0, 1], [250, -250])
  const opacityImage = useTransform(scrollYImageProgress, [0, 1], [1, 0])
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

  console.log(imgUrl)

  return (
    <div className="relative min-h-screen overflow-hidden">
      <motion.div
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: `100vh`,
          scale,
        }}
        ref={targetRefImage}
        className="sticky z-0 overflow-hidden rounded-xl"
      >
        <motion.div
          className="absolute inset-0 bg-neutral-950/70"
          style={{
            opacity: opacityImage,
          }}
        />
      </motion.div>
      <motion.div
        style={{
          y,
          opacity,
        }}
        ref={targetRef}
        className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
      >
        <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
          {subheading}
        </p>
        <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
      </motion.div>
    </div>
  )
}

export default ParallaxImage
