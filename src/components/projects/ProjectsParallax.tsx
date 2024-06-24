'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import testImage from '../../../public/imgs/projects/teste.jpg'

import Image from 'next/image'

const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
]

const Column = ({ images, y }) => {
  return (
    <motion.div
      className="flex relative h-screen w-1/3 min-w-64 flex-col gap-2 flex-nowrap"
      style={{ y }}
    >
      {images.map((src, i) => {
        return (
          <div
            key={i}
            className="absolute h-1/2 w-full border border-1 overflow-hidden object-cover"
          >
            <Image src={testImage} alt="image" fill />
          </div>
        )
      })}
    </motion.div>
  )
}

const ProjectsParallax = () => {
  const gallery = useRef(null)

  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  const { scrollYProgress } = useScroll({
    target: gallery,

    offset: ['start end', 'end start'],
  })

  const { height } = dimension

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])

  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])

  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', resize)

    resize()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <main>
      <div className="h-screen" />

      <div className="h-[175%] overflow-hidden bg-primary">
        <div className="flex h-[200%] -top-24 gap-2 p-2 relative">
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
        </div>
      </div>

      <div className="h-screen" />
    </main>
  )
}

export default ProjectsParallax
