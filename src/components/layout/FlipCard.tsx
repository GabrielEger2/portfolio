import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { MdOutlineAdsClick } from 'react-icons/md'

interface FlipCardProps {
  courseImage: string
  courseTitle: string
  courseDescription: string
  courseTags: string[]
}

const FlipCard: React.FC<FlipCardProps> = ({
  courseImage,
  courseDescription,
  courseTitle,
  courseTags,
}) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped)
      setIsAnimating(true)
    }
  }
  return (
    <div
      className="cursor-pointer"
      onClick={handleFlip}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="shadow-lg"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.3s' }}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: 'normal' }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <span
          className="badge badge-primary text-base-100 z-10 absolute right-1 top-1 items-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          Click Me! <MdOutlineAdsClick size={20} className="inline-block" />
        </span>
        <Image
          className="card absolute h-56"
          width={600}
          height={400}
          src={courseImage}
          alt="image"
          style={{ backfaceVisibility: 'hidden' }}
        />
        <div
          className="card"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="p-4 space-y-2 h-56">
            <h2 className="card-title">{courseTitle}</h2>
            <p>{courseDescription}</p>
            <div>
              {courseTags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="badge badge-primary text-base-100 mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default FlipCard
