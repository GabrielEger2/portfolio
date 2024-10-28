'use client'

import Cookies from 'js-cookie'
import { useTranslations } from 'next-intl'
import { SetStateAction } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { IoLanguage } from 'react-icons/io5'

interface Language {
  name: string
  value: string
}

const LanguageController = () => {
  const t = useTranslations('layout')
  const handleLanguageChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    if (Cookies.get('cookieConsent') === 'accepted') {
      Cookies.set('NEXT_LOCALE', event.target.value as string)
    }
  }

  return (
    <div className="dropdown dropdown-end z-50">
      <div tabIndex={0} role="button" className="btn m-1 btn-ghost">
        <IoLanguage size={20} />
        <FaArrowDown size={10} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-300"
      >
        {t.raw('languagesOptions').map((language: Language, index: number) => (
          <li key={index}>
            <input
              type="radio"
              name="language-dropdown"
              className="btn btn-sm btn-block btn-ghost justify-start"
              aria-label={language.name}
              value={language.value}
              onChange={handleLanguageChange}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LanguageController
