'use client'

import { projects } from '@/content/projects/ParallaxColumn'
import { MotionValue, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import ParallaxColumn from './ParallaxColumn'

interface ProjectsParallaxProps {
  scrollYProgress: MotionValue<number>
}

const ProjectsParallax: React.FC<ProjectsParallaxProps> = ({
  scrollYProgress,
}) => {
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
          projects={[
            projects[0],
            projects[1],
            projects[2],
            projects[3],
            projects[0],
            projects[1],
          ]}
          y={y}
        />
        <ParallaxColumn
          projects={[
            projects[0],
            projects[3],
            projects[2],
            projects[1],
            projects[2],
            projects[0],
          ]}
          y={y2}
        />
        <ParallaxColumn
          projects={[
            projects[0],
            projects[1],
            projects[3],
            projects[0],
            projects[2],
            projects[3],
          ]}
          y={y3}
        />
      </div>
    </div>
  )
}

export default ProjectsParallax
