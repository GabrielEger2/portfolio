'use client'

import { useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import ParallaxColumn from './ParallaxColumn'

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

const ProjectsParallax = ({ scrollYProgress }) => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  const { height } = dimension

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1])

  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * -0.6])

  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.3])

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
    <div className="overflow-hidden h-[200vh]">
      <div className="flex gap-2 p-2 relative -translate-y-96">
        <ParallaxColumn
          images={[
            images[0],
            images[1],
            images[2],
            images[0],
            images[1],
            images[2],
          ]}
          y={y}
        />
        <ParallaxColumn
          images={[
            images[0],
            images[1],
            images[2],
            images[0],
            images[1],
            images[2],
          ]}
          y={y2}
        />
        <ParallaxColumn
          images={[
            images[0],
            images[1],
            images[2],
            images[0],
            images[1],
            images[2],
          ]}
          y={y3}
        />
      </div>
    </div>
  )
}

export default ProjectsParallax
