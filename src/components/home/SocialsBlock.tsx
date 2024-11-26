import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { SiGithub, SiLeetcode, SiLinkedin } from 'react-icons/si'
import Block from './Block'

const SocialsBlock = () => {
  const t = useTranslations('home.socialBlocks')

  return (
    <>
      <Block
        whileHover={{
          rotate: '1.5deg',
          scale: 1.05,
        }}
        className="col-span-4 row-span-2 bg-accent col-start-1 row-start-7 min-h-40 lg:min-h-0 lg:col-start-9 lg:row-start-1"
      >
        <Link
          href={t('githubLink')}
          target="_blank"
          className="grid h-full place-content-center text-3xl text-accent-content"
        >
          <SiGithub />
        </Link>
      </Block>
      <Block
        whileHover={{
          rotate: '-1.5deg',
          scale: 1.05,
        }}
        className="col-span-4 row-span-2 bg-secondary col-start-5 row-start-7 lg:col-start-9 lg:row-start-3"
      >
        <Link
          href={t('leetCodeLink')}
          target="_blank"
          className="grid h-full place-content-center text-3xl text-secondary-content"
        >
          <SiLeetcode />
        </Link>
      </Block>
      <Block
        whileHover={{
          rotate: '1.5deg',
          scale: 1.05,
        }}
        className="col-span-4 row-span-2 bg-primary col-start-9 row-start-7 lg:col-start-9 lg:row-start-5"
      >
        <Link
          href={t('linkedinLink')}
          target="_blank"
          className="grid h-full place-content-center text-3xl text-primary-content"
        >
          <SiLinkedin />
        </Link>
      </Block>
    </>
  )
}

export default SocialsBlock
