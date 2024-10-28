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
                    <span className="inline-block p-3 text-primary-content rounded-full bg-primary">
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
            <form className="card-body">
              <div className="flex gap-4 w-full">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">
                      {t.raw('contactForm.name.label')}
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder={t.raw('contactForm.name.placeholder')}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">
                      {t.raw('contactForm.surname.label')}
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder={t.raw('contactForm.surname.placeholder')}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    {t.raw('contactForm.email.label')}
                  </span>
                </label>
                <input
                  type="email"
                  placeholder={t.raw('contactForm.email.placeholder')}
                  className="input input-bordered"
                  required
                />
              </div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">
                    {t.raw('contactForm.message.label')}
                  </span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-36"
                  placeholder={t.raw('contactForm.message.placeholder')}
                />
              </label>
              <div className="form-control mt-6">
                <button className="btn btn-primary">
                  {t('contactForm.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
