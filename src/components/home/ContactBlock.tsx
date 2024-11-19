import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { FiArrowUpRight } from 'react-icons/fi'
import EmailForm from '../contact/EmailForm'
import Block from './Block'

const ContactBlock = () => {
  const t = useTranslations('home.contactBlock')

  return (
    <>
      <Block className="col-span-6 row-span-1">
        <div className="flex flex-col justify-around h-full">
          <h1 className="mx-6 mt-6 text-xl font-semibold">{t('title')}</h1>
          <div>
            <EmailForm />
          </div>
        </div>
      </Block>
      <Block className="col-span-6 row-span-2 ">
        <Link
          href={t('link')}
          className="flex justify-center items-center h-full"
        >
          <h1 className="text-2xl font-semibold">{t('end')}</h1>
          {'  '}
          <FiArrowUpRight size={24} />
        </Link>
      </Block>
    </>
  )
}

export default ContactBlock
