import ExempleImage from '@/assets/imgs/experience/FormalExperience1.jpg'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ScrollCardProps {
  title: string
  subTitle: string
  image: string
  index: number
}

const ScrollCard: React.FC<ScrollCardProps> = ({
  title,
  subTitle,
  image,
  index,
}) => {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="card shadow-xl w-full h-96 bg-base-200 border border-base-300">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{subTitle}</p>
        </div>
        <figure>
          <motion.div>
            <Image src={ExempleImage} alt="image" />
          </motion.div>
        </figure>
      </div>
    </div>
  )
}

export default ScrollCard
