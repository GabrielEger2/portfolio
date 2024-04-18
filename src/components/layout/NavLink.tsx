'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const NavLink = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onHoverEnd={() => setHovered(false)}
      className="flex flex-col items-center relative"
    >
      <motion.a
        className="cursor-pointer z-20"
        onHoverStart={() => setHovered(true)}
      >
        <p className="text-lg translate-y-1">Home</p>
      </motion.a>
      <motion.span
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="h-1 w-full bg-primary rounded-box"
      />
      <motion.div
        className="flex flex-col items-center absolute mt-8 pt-6"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 15 }}
        transition={{ duration: 0.3 }}
        onHoverEnd={() => setHovered(false)}
      >
        <div className="h-5 w-5 bg-base-100 z-10 rotate-45 absolute -translate-y-2.5 border-l border-t border-base-300" />
        <motion.div className="card card-side h-60 bg-base-100 border border-base-300">
          <figure className="bg-primary w-52">
            <div className="p-4 text-base-100 flex flex-col justify-between h-full">
              <h1 className="text-xl font-semibold underline">Home</h1>
              <p>
                This is the home page. You can find all the information you need
              </p>
              <p>Find out more</p>
            </div>
          </figure>
          <div className="card-body w-[28rem]">
            <div className="w-full flex justify-between h-full items-center">
              <ul>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
              <ul>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
              <ul>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default NavLink
