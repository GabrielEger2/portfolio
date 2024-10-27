import Hero from '@/components/home/Hero'
import { useTranslations } from 'next-intl'

const Page = () => {
  const t = useTranslations()
  console.log(t('HomePage.about'))
  return (
    <div>
      <Hero />
      <div className="h-screen" />
    </div>
  )
}

export default Page
