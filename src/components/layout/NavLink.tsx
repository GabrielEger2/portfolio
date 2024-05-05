'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

interface content {
  title: string
  description: string
  href: string
  topics: { title: string; items: string[] }[]
}

interface NavLinkProps {
  content: content
  linkText: string
}

const NavLink = ({ content, linkText }: NavLinkProps) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onHoverEnd={(e) => {
        e.stopPropagation()
        setHovered(false)
      }}
      className="flex flex-col items-center relative px-3"
    >
      <Link href={content.href}>
        <motion.div
          className="cursor-pointer z-20"
          onHoverStart={(event) => {
            event.stopPropagation()
            setHovered(true)
          }}
        >
          <p className="text-lg translate-y-1">{content.title}</p>
        </motion.div>
      </Link>
      <motion.span
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="h-1 w-full bg-primary rounded-box"
      />
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="flex flex-col items-center absolute mt-8 pt-8 p-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3 }}
            onHoverEnd={(e) => {
              e.stopPropagation()
              setHovered(false)
            }}
          >
            <div className="h-5 w-5 bg-base-100 z-10 rotate-45 absolute -translate-y-2.5 border-l border-t border-base-300" />
            <motion.div className="card card-side h-60 bg-base-100 border border-base-300">
              <figure className="bg-primary w-52">
                <div className="p-4 text-base-100 flex flex-col justify-between h-full">
                  <div>
                    <h1 className="text-xl font-semibold underline">
                      {content.title}
                    </h1>
                    <p className="mt-4">{content.description}</p>
                  </div>
                  <p>{linkText}</p>
                </div>
              </figure>
              <div className="card-body w-[28rem]">
                <div className="w-full flex justify-around h-full items-center">
                  {content.topics.map((topic) => (
                    <div key={topic.title} className="flex flex-col">
                      <h1 className="text-lg font-semibold">{topic.title}</h1>
                      <ul className="mt-2">
                        {topic.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default NavLink
