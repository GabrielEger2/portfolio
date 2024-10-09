'use client'

import {
  HomeLink,
  NotFoundButton,
  NotFoundText,
  NotFoundTitle,
  noiseImage,
} from '@/content/notFound/NotFound'
import { motion } from 'framer-motion'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="min-h-screen flex justify-center items-center bg-base-300 py-20 px-4">
        <div className="w-full max-w-7xl flex flex-col items-center">
          <h1 className="text-center text-6xl font-bold">{NotFoundTitle}</h1>
          <p className="text-center mt-4 text-xl font-semibold">
            {NotFoundText}
          </p>
          <Link href={HomeLink}>
            <button className="btn btn-secondary mt-6">{NotFoundButton}</button>
          </Link>
        </div>
      </div>
      <motion.div
        initial={{ transform: 'translateX(-10%) translateY(-10%)' }}
        animate={{
          transform: 'translateX(10%) translateY(10%)',
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
          ease: 'linear',
          repeatType: 'mirror',
        }}
        style={{
          backgroundImage: `url(${noiseImage})`,
        }}
        className="pointer-events-none absolute -inset-[100%] opacity-[8%]"
      />
    </div>
  )
}

export default NotFound
