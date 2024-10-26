'use client'

import { languageOptions } from '@/content/layout/LanguageController'
import Cookies from 'js-cookie'
import { SetStateAction } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { IoLanguage } from 'react-icons/io5'

const LanguageController = () => {
  const handleLanguageChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    if (Cookies.get('cookieConsent') === 'accepted') {
      Cookies.set('language', event.target.value as string)
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
        {languageOptions.map((language) => (
          <li key={language}>
            <input
              type="radio"
              name="language-dropdown"
              className="btn btn-sm btn-block btn-ghost justify-start"
              aria-label={language}
              value={language}
              onChange={handleLanguageChange}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LanguageController
