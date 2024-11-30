import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { FiArrowUpRight } from 'react-icons/fi'
import Block from './Block'

const AboutBlock = () => {
  const t = useTranslations('home.textBlocks')
  return (
    <Block className="col-span-12 p-6 sm:col-span-6 lg:col-span-3 lg:row-span-2">
      <p className="text-2xl">{t('aboutBlock')}</p>
    </Block>
  )
}

const HeaderBlock = () => {
  const t = useTranslations('home.textBlocks.headerBlock')
  return (
    <Block className="col-span-6 p-6 row-span-3 col-start-7 row-start-1 lg:col-start-5 lg:col-span-4">
      <h1 className="mb-4 text-4xl">
        {t('title')}{' '}
        <span className="font-semibold underline text-primary">
          {t('name')}
        </span>
        👋
      </h1>
      <p className="text-xl">{t('text')}</p>
      <Link
        href={t('contactLink') as '/contact'}
        className="flex items-center gap-1 text-blue-500 hover:underline mt-4"
      >
        {t('contactMe')} <FiArrowUpRight />
      </Link>
    </Block>
  )
}

export { AboutBlock, HeaderBlock }
