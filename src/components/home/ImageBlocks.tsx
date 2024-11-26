'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Block from './Block'

const VerticalImage = () => (
  <Block className="col-span-6 row-span-6 row-start-1 col-start-1 lg:col-span-4">
    <Image
      src="/imgs/home/verticalPhoto.jpg"
      alt="Gabriel"
      className="w-full h-full object-cover card"
      width={650}
      height={870}
    />
  </Block>
)

const MapBlock = () => (
  <Block className="relative col-span-6 row-span-3 col-start-7 row-start-4 lg:col-start-5 lg:col-span-4">
    <motion.div
      className="relative w-full h-full"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <Image
        src="/imgs/home/globeImage.jpg"
        alt="Gabriel"
        className="w-full h-full object-cover"
        width={600}
        height={600}
      />
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-base-content bg-opacity-50"
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-base-100 font-bold text-xl text-center px-4">
          Available to work from all around the world
        </span>
      </motion.div>
    </motion.div>
  </Block>
)

const SquarePhoto = () => (
  <Block className="row-start-10 col-span-6 p-0 lg:col-span-3 lg:row-span-1">
    <Image
      src="/imgs/home/squarePhoto.jpg"
      alt="Gabriel"
      className="w-full h-full object-cover card"
      width={600}
      height={600}
    />
  </Block>
)

export { MapBlock, SquarePhoto, VerticalImage }
