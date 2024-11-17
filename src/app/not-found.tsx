'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import './globals.css'

const NotFound = () => {
  return (
    <html>
      <body>
        <div className="relative overflow-hidden">
          <div className="min-h-screen flex justify-center items-center bg-base-300 py-20 px-4">
            <div className="w-full max-w-7xl flex flex-col items-center">
              <h1 className="text-center text-6xl font-bold">404 Not Found</h1>
              <p className="text-center mt-4 text-xl font-semibold">
                The page you are looking for, unfortunately, does not exist
              </p>
              <Link href="/">
                <button className="btn btn-secondary mt-6">Go Back Home</button>
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
              backgroundImage: 'url(/imgs/notFound/noise.jpg)',
            }}
            className="pointer-events-none absolute -inset-[100%] opacity-[8%]"
          />
        </div>
      </body>
    </html>
  )
}

export default NotFound
