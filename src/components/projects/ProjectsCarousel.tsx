'use client'

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import { useWindowSize } from 'react-use'
import { movies } from '../../content/projects/ProjectsCarousel'
import Self from '../experience/Self'

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
    [0, 0.1, 0.6],
    [maximumScale * 1.1, maximumScale, 1],
  )

  const [carouselVariant, setCarouselVariant] = useState<'inactive' | 'active'>(
    'inactive',
  )
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (progress >= 0.61) {
      setCarouselVariant('active')
    } else {
      setCarouselVariant('inactive')
    }
  })

  return (
    <motion.div animate={carouselVariant}>
      <div ref={carouselWrapperRef} className="h-[300vh] overflow-clip card">
        <div className="sticky top-11 flex h-screen items-center">
          <div className="relative flex w-full justify-center gap-5">
            <motion.div
              style={{ scale }}
              className="relative aspect-[9/16] w-[300px] shrink-0 overflow-clip card md:aspect-video md:w-[60vw]"
            >
              <img
                className="h-full w-full object-cover"
                src={movies[1].poster}
                alt={movies[1].name}
              />
              <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 },
                }}
                className="absolute bottom-0 left-0 flex w-full flex-col items-center gap-4 p-5 text-lg text-white md:flex-row md:justify-between md:gap-0"
              >
                <p>Best video title ever</p>
                <button className="btn btn-primary">TERSDTE</button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.4 }}
        className="-mt-[calc((100vh-(300px*(16/9)))/2)] pt-10 space-y-3 md:-mt-[calc((100vh-(60vw*(9/16)))/2)]"
      >
        <Self />
      </motion.div>
    </motion.div>
  )
}
