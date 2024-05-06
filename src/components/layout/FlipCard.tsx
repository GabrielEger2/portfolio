import { motion } from 'framer-motion'
import { useState } from 'react'

const FlipCard = () => {
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
        className="card w-96 shadow-lg"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.3s' }}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: 'normal' }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div className="absolute" style={{ backfaceVisibility: 'hidden' }}>
          <div className="card-body">
            <h2 className="card-title">front!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
        </div>
        <div
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="card-body">
            <h2 className="card-title">back!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
        </div>
      </motion.div>
    </div>
  )
}

export default FlipCard
