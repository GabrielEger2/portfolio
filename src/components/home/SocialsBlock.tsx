import { SiGithub, SiLeetcode, SiLinkedin } from 'react-icons/si'
import Block from './Block'

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: '1.5deg',
        scale: 1.05,
      }}
      className="col-span-4 row-span-2 col-start-9 row-start-1 bg-accent"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-accent-content"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: '-1.5deg',
        scale: 1.05,
      }}
      className="col-span-4 row-span-2 col-start-9 row-start-3 bg-secondary"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-secondary-content"
      >
        <SiLeetcode />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: '1.5deg',
        scale: 1.05,
      }}
      className="col-span-4 row-span-2 col-start-9 row-start-5 bg-primary"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-primary-content"
      >
        <SiLinkedin />
      </a>
    </Block>
  </>
)

export default SocialsBlock
