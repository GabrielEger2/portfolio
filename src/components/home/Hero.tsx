'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  const numLines = 10
  const lines = Array.from({ length: numLines }, (_, index) => index)

  return (
    <>
      <div className="min-h-screen overflow-hidden relative ">
        <div className="flex flex-col h-[80vh] justify-end w-screen z-40">
          <div className="w-full flex justify-end absolute top-12">
            <svg
              width="500"
              height="500"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
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
            </svg>
          </div>
          <div className="w-full z-40">
            <svg
              id="visual"
              viewBox="0 0 1920 1080"
              width="100%"
              height="auto"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <path
                d="M0 829L213 881L427 780L640 884L853 809L1067 743L1280 745L1493 688L1707 763L1920 847L1920 1081L1707 1081L1493 1081L1280 1081L1067 1081L853 1081L640 1081L427 1081L213 1081L0 1081Z"
                fill="oklch(var(--b1))"
              />
              <path
                d="M0 829L213 881L427 780L640 884L853 809L1067 743L1280 745L1493 688L1707 763L1920 847L1920 1081L1707 1081L1493 1081L1280 1081L1067 1081L853 1081L640 1081L427 1081L213 1081L0 1081Z"
                fill="oklch(var(--p))"
                fillOpacity={0.4}
              />
              <path
                d="M0 934L213 881L427 780L640 884L853 829L1067 922L1280 895L1493 810L1707 875L1920 861L1920 1081L1707 1081L1493 1081L1280 1081L1067 1081L853 1081L640 1081L427 1081L213 1081L0 1081Z"
                fill="oklch(var(--p))"
                fillOpacity={0.4}
              />
              <path
                d="M0 934L213 891L427 941L640 894L853 982L1067 922L1280 905L1493 973L1707 912L1920 959L1920 1081L1707 1081L1493 1081L1280 1081L1067 1081L853 1081L640 1081L427 1081L213 1081L0 1081Z"
                fill="oklch(var(--p))"
                fillOpacity={0.5}
              />
              <path
                d="M0 934L213 891L427 1001L640 941L853 982L1067 1006L1280 951L1493 989L1707 996L1920 959L1920 1081L1707 1081L1493 1081L1280 1081L1067 1081L853 1081L640 1081L427 1081L213 1081L0 1081Z"
                fill="oklch(var(--p))"
                fillOpacity={0.7}
              />
              <path
                d="M0 983L213 997L427 1024L640 1014L853 968L1067 970L1280 1048L1493 1024L1707 983L1920 959L1920 1081L1707 1081L1493 1081L1280 1081L1067 1081L853 1081L640 1081L427 1081L213 1081L0 1081Z"
                fill="oklch(var(--p))"
                fillOpacity={1}
              />
            </svg>
          </div>
        </div>
        <div className="h-[20vh] w-full">
          {lines.map((line, index) => (
            <div key={line} className="absolute top-100 w-full">
              <motion.div
                className="w-full bg-primary"
                initial={{
                  y: '30vh',
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
    </>
  )
}

export default Hero
