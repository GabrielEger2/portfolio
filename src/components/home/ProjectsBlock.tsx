'use client'

import { Link } from '@/i18n/routing'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import { BiArrowFromRight, BiArrowToRight } from 'react-icons/bi'
import { FiArrowUpRight } from 'react-icons/fi'
import Block from './Block'

const ProjectsBlock = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const t = useTranslations('home.projectsBlock')
  const projects = t.raw('projects')

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    )
  }

  return (
    <Block className="col-span-12 min-h-60 sm:min-h-96 lg:min-h-0 lg:col-span-9 lg:row-span-2">
      <div className="relative overflow-hidden w-full h-full card">
        <AnimatePresence>
          <motion.div
            key={projects[currentIndex].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full flex justify-between gap-4 p-4 items-end bg-base-300"
          >
            <Image
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              layout="fill"
              className="z-0"
            />
            <h1 className="text-white z-10">{projects[currentIndex].title}</h1>
            <Link
              href={t('link') as '/projects'}
              className="btn btn-accent z-10"
            >
              {t('title')} <FiArrowUpRight />
            </Link>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={handlePrev}
          className="btn btn-primary absolute left-4 top-1/2"
        >
          <BiArrowFromRight size={24} />
        </button>
        <button
          onClick={handleNext}
          className="btn btn-primary absolute right-4 top-1/2"
        >
          <BiArrowToRight size={24} />
        </button>
      </div>
    </Block>
  )
}

export default ProjectsBlock
