'use client'

import { MotionValue, useTransform } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import ParallaxColumn from './ParallaxColumn'

interface ProjectsParallaxProps {
  scrollYProgress: MotionValue<number>
}

const ProjectsParallax: React.FC<ProjectsParallaxProps> = ({
  scrollYProgress,
}) => {
  const t = useTranslations('projects')
  const projects = t.raw('projects')
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
            projects[1],
            projects[2],
            projects[5],
            projects[6],
            projects[4],
            projects[3],
          ]}
          y={y}
        />
        <ParallaxColumn
          projects={[
            projects[2],
            projects[5],
            projects[6],
            projects[3],
            projects[1],
            projects[0],
          ]}
          y={y2}
        />
        <ParallaxColumn
          projects={[
            projects[3],
            projects[5],
            projects[2],
            projects[6],
            projects[0],
            projects[4],
          ]}
          y={y3}
        />
      </div>
    </div>
  )
}

export default ProjectsParallax
