'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'
import { ReactTyped } from 'react-typed'

const Hero = () => {
  const numLines = 10
  const lines = Array.from({ length: numLines }, (_, index) => index)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const sunY = useTransform(scrollYProgress, [0, 0.6], ['0%', '85%'])
  const mountainY = useTransform(scrollYProgress, [0, 1], ['0%', '5%'])
  const mountain2Y = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const mountain3Y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const mountain4Y = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const t = useTranslations('home.hero')

  const headerTitles = Array.from({ length: 4 }, (_, i) =>
    t(`headerTitles.title${i + 1}`),
  )

  return (
    <div ref={ref} className="min-h-screen">
      <div className="flex flex-col h-[80vh] justify-end z-40">
        <div className="w-full flex justify-center absolute top-12">
          <div className="flex justify-between w-full max-w-7xl mx-4">
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-semibold">{t('headerBeginning')}</h1>
              <h1 className="text-7xl my-4 -translate-x-2 font-semibold">
                {t('headerName')}{' '}
                <span className="text-primary">{t('headerSurname')}</span>
              </h1>
              <ReactTyped
                className="lg:text-4xl sm:text-3xl text-2xl font-semibold"
                strings={headerTitles}
                typeSpeed={80}
                backSpeed={100}
                loop
              />
            </div>
            <motion.svg
              width="500"
              height="500"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              style={{ y: sunY }}
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" />
                  <stop offset="100%" />
                </linearGradient>
              </defs>
              <rect width="500" height="500" fill="oklch(var(--b1))" />
              <circle cx="250" cy="250" r="200" fill="oklch(var(--s))" />
              <rect
                x="50"
                y="300"
                width="400"
                height="20"
                fill="oklch(var(--b1))"
              />
              <rect
                x="50"
                y="340"
                width="400"
                height="20"
                fill="oklch(var(--b1))"
              />
              <rect
                x="50"
                y="380"
                width="400"
                height="20"
                fill="oklch(var(--b1))"
              />
              <rect
                x="50"
                y="420"
                width="400"
                height="20"
                fill="oklch(var(--b1))"
              />
            </motion.svg>
          </div>
        </div>
        <div className="w-full z-40">
          <svg
            id="visual"
            viewBox="0 0 1920 1080"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <motion.path
              d="M0 829L213 881L427 780L640 884L853 809L1067 743L1280 745L1493 688L1707 763L1920 847L1920 1081L1707 1081L1493 1081L1280 1081L1067 1081L853 1081L640 1081L427 1081L213 1081L0 1081Z"
              fill="oklch(var(--b1))"
              style={{ y: mountain4Y }}
            />
            <motion.path
              d="M0 829L213 881L427 780L640 884L853 809L1067 743L1280 745L1493 688L1707 763L1920 847L1920 1081L1707 1081L1493 1081L1280 1081L1067 1081L853 1081L640 1081L427 1081L213 1081L0 1081Z"
              fill="oklch(var(--p))"
              fillOpacity={0.6}
              style={{ y: mountain4Y }}
            />
            <motion.path
              d="M0 934L213 881L427 780L640 884L853 829L1067 922L1280 895L1493 810L1707 875L1920 861L1920 1081L1707 1081L1493 1081L1280 1081L1067 1081L853 1081L640 1081L427 1081L213 1081L0 1081Z"
              fill="oklch(var(--b1))"
              style={{ y: mountain3Y }}
            />
            <motion.path
              d="M0 933L213 880L427 779L640 883L853 828L1067 921L1280 894L1493 809L1707 874L1920 860L1920 1081L1707 1081L1493 1081L1280 1081L1067 1081L853 1081L640 1081L427 1081L213 1081L0 1081Z"
              fill="oklch(var(--p))"
              fillOpacity={0.7}
              style={{ y: mountain3Y }}
            />
            <motion.path
              d="M0 934L213 891L427 941L640 894L853 982L1067 922L1280 905L1493 973L1707 912L1920 959L1920 1081L1707 1081L1493 1081L1280 1081L1067 1081L853 1081L640 1081L427 1081L213 1081L0 1081Z"
              fill="oklch(var(--b1))"
              style={{ y: mountain2Y }}
            />
            <motion.path
              d="M0 933L213 890L427 940L640 893L853 981L1067 921L1280 904L1493 972L1707 911L1920 959L1920 1081L1707 1081L1493 1081L1280 1081L1067 1081L853 1081L640 1081L427 1081L213 1081L0 1081Z"
              fill="oklch(var(--p))"
              fillOpacity={0.8}
              style={{ y: mountain2Y }}
            />
            <motion.path
              d="M0 934L213 891L427 1001L640 941L853 982L1067 1006L1280 951L1493 989L1707 996L1920 959L1920 1081L1707 1081L1493 1081L1280 1081L1067 1081L853 1081L640 1081L427 1081L213 1081L0 1081Z"
              fill="oklch(var(--b1))"
              y={mountainY}
              style={{ y: mountainY }}
            />
            <motion.path
              d="M0 933L213 890L427 1000L640 940L853 981L1067 1005L1280 950L1493 988L1707 996L1920 959L1920 1081L1707 1081L1493 1081L1280 1081L1067 1081L853 1081L640 1081L427 1081L213 1081L0 1081Z"
              fill="oklch(var(--p))"
              fillOpacity={0.9}
              style={{ y: mountainY }}
            />
            <path
              d="M0 983L213 997L427 1024L640 1014L853 968L1067 970L1280 1048L1493 1024L1707 983L1920 959L1920 1081L1707 1081L1493 1081L1280 1081L1067 1081L853 1081L640 1081L427 1081L213 1081L0 1081Z"
              fill="oklch(var(--p))"
              fillOpacity={1}
            />
          </svg>
        </div>
      </div>
      <div className="h-[20vh] w-full z-10 bg-base-100 absolute">
        {lines.map((line, index) => (
          <div key={line} className="absolute top-100 w-full">
            <motion.div
              className="w-full bg-primary"
              initial={{
                y: '20vh',
                height: '0.3rem',
              }}
              animate={{ y: '0vh', height: '0.01rem' }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: -index + 1,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero
