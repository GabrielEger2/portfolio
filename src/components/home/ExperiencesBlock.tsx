import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { BiSolidBriefcase } from 'react-icons/bi'
import { FaUniversity } from 'react-icons/fa'
import { PiCertificateFill } from 'react-icons/pi'
import Block from './Block'

const ExperiencesBlock = () => {
  const t = useTranslations('home.experiencesBlock')
  return (
    <>
      <Block className="col-span-12 flex flex-col justify-between p-6 sm:col-span-4 lg:col-span-3 lg:row-span-1">
        <Link href={t('work.link') as '/experience'}>
          <div className="flex flex-col items-center">
            <BiSolidBriefcase size={30} />
            <h1 className="text-center text-lg font-semibold">
              {t('work.title')}
            </h1>
          </div>
          <p className="mt-4">{t('work.description')}</p>
        </Link>
      </Block>
      <Block className="col-span-12 flex flex-col justify-between p-6 sm:col-span-4 lg:col-span-3 lg:row-span-1">
        <Link href={t('formal.link') as '/experience'}>
          <div className="flex flex-col items-center">
            <FaUniversity size={30} />
            <h1 className="text-center text-lg font-semibold">
              {t('formal.title')}
            </h1>
          </div>
          <p className="mt-4">{t('formal.description')}</p>
        </Link>
      </Block>
      <Block className="col-span-12 flex flex-col justify-between p-6 sm:col-span-4 lg:col-span-3 lg:row-span-1">
        <Link href={t('self.link') as '/experience'}>
          <div className="flex flex-col items-center">
            <PiCertificateFill size={30} />
            <h1 className="text-center text-lg font-semibold">
              {t('self.title')}
            </h1>
          </div>
          <p className="mt-4">{t('self.description')}</p>
        </Link>
      </Block>
    </>
  )
}

export default ExperiencesBlock
