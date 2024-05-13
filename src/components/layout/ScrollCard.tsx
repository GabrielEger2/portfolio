import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

interface ScrollCardProps {
  title: string
  time: string
  local: string
  description: string
  technologies: string[] | null
  image: string
  index: number
}

const ScrollCard: React.FC<ScrollCardProps> = ({
  title,
  time,
  local,
  description,
  technologies,
  image,
  index,
}) => {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ['start end', 'start start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])

  return (
    <div
      ref={container}
      className="flex sticky z-10 h-screen items-center top-"
      style={{ top: `calc(${index * 1 + 2}rem)` }}
    >
      <div className="flex w-full justify-center">
        <div className="card shadow-xl w-full bg-base-100 border border-base-300">
          <div className="card-body h-52">
            <h2 className="card-title">{title}</h2>
            <time className="text-sm italic">{time}</time>
            <time className="text-sm italic">{local}</time>
            <p>{description}</p>
            <div>
              {technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="badge badge-primary text-base-100 mr-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <figure className="h-60 mt-10">
            <motion.div style={{ scale: imageScale }}>
              <Image
                width={900}
                height={600}
                layout="responsive"
                src={image}
                alt="image"
              />
            </motion.div>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default ScrollCard
