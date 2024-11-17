import EmailForm from '@/components/contact/EmailForm'
import { useTranslations } from 'next-intl'
import { BiLogoGithub, BiLogoLinkedin, BiMailSend } from 'react-icons/bi'

const iconComponents = {
  BiMailSend,
  BiLogoLinkedin,
  BiLogoGithub,
}

const Contact = () => {
  const t = useTranslations('contact')
  const socialLinks = t.raw('socialLinks')

  return (
    <div className="min-h-screen h-full pt-16 flex justify-center items-center">
      <div className="max-w-7xl w-full h-full px-2 flex gap-12">
        <div className="w-1/2">
          <p className="font-medium text-primary">{t('contactHeader')}</p>
          <h1 className="mt-2 text-2xl font-semibold md:text-3xl">
            {t('contactTitle')}
          </h1>
          <p className="mt-3">{t('contactText')}</p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {socialLinks.map((social, index) => {
                const IconComponent = iconComponents[social.icon]
                return (
                  <div key={index}>
                    <span className="inline-block p-3 text-secondary-content rounded-full bg-secondary">
                      {IconComponent && <IconComponent />}
                    </span>
                    <h2 className="mt-4 font-medium">{social.title}</h2>
                    <p className="mt-2 text-sm">{social.text}</p>
                    <p className="mt-2 text-sm text-blue-500 underline">
                      {social.link}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="card bg-base-100 w-full h-full border border-base-200 shadow-lg">
            <EmailForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
