import { motion } from 'framer-motion'
import Image from 'next/image'

import testImage from '../../../public/imgs/projects/teste.jpg'

const ParallaxColumn = ({ images, y }) => {
  return (
    <motion.div className="flex gap-4 w-1/3 min-w-64 flex-col" style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className="h-full w-full border border-1">
            <Image src={testImage} alt="image" />
          </div>
        )
      })}
    </motion.div>
  )
}
export default ParallaxColumn
