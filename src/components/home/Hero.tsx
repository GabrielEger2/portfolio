'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  const numLines = 10
  const lines = Array.from({ length: numLines }, (_, index) => index)

  return (
    <>
      <div className="min-h-screen overflow-hidden relative ">
        <div className="flex h-[70vh] items-end">
          <div className="w-full h-[0.025rem] bg-primary tranlate-y-1" />
        </div>
        <div className="h-[30vh] w-full">
          {lines.map((line, index) => (
            <div key={line} className="absolute top-100 w-full">
              <motion.div
                className="w-full bg-primary"
                initial={{
                  y: '30vh',
                  height: '0.3rem',
                }}
                animate={{ y: '0vh', height: '0.03rem' }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  delay: index,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Hero
