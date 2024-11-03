'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const Block = ({ className, ...rest }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('animate')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            delay: Math.random() * 0.3,
            type: 'spring',
            stiffness: 200,
            damping: 25,
            duration: 2,
          },
        },
      }}
      className={
        'card border border-base-300 shadow-md' +
        (className ? ` ${className}` : '')
      }
      {...rest}
    />
  )
}

export default Block
