import {
  contactFormEmail,
  contactFormEmailPlaceholder,
  contactFormMessage,
  contactFormMessagePlaceholder,
  contactFormName,
  contactFormNamePlaceholder,
  contactFormSubmit,
  contactFormSurname,
  contactFormSurnamePlaceholder,
  contactText,
  contactTitle,
  contentHeader,
  socialLinks,
} from '@/content/contact/contact'

const contact = () => {
  return (
    <div className="min-h-screen h-full pt-16 flex justify-center items-center">
      <div className="max-w-7xl w-full h-full px-2 flex gap-12">
        <div className="w-1/2">
          <p className="font-medium text-primary">{contentHeader}</p>
          <h1 className="mt-2 text-2xl font-semibold md:text-3xl">
            {contactTitle}
          </h1>
          <p className="mt-3">{contactText}</p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {socialLinks.map((social, index) => (
                <div key={index}>
                  <span className="inline-block p-3 text-primary-content rounded-full bg-primary">
                    {social.icon}
                  </span>
                  <h2 className="mt-4 font-medium">{social.title}</h2>
                  <p className="mt-2 text-sm">{social.text}</p>
                  <p className="mt-2 text-sm text-blue-500 underline">
                    {social.link}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="card bg-base-100 w-full h-full border border-base-200 shadow-lg">
            <form className="card-body">
              <div className="flex gap-4 w-full">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">{contactFormName}</span>
                  </label>
                  <input
                    type="text"
                    placeholder={contactFormNamePlaceholder}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">{contactFormSurname}</span>
                  </label>
                  <input
                    type="text"
                    placeholder={contactFormSurnamePlaceholder}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">{contactFormEmail}</span>
                </label>
                <input
                  type="email"
                  placeholder={contactFormEmailPlaceholder}
                  className="input input-bordered"
                  required
                />
              </div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">{contactFormMessage}</span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-36"
                  placeholder={contactFormMessagePlaceholder}
                />
              </label>
              <div className="form-control mt-6">
                <button className="btn btn-primary">{contactFormSubmit}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact
