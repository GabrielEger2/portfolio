'use client'

import Cookies from 'js-cookie'
import { useTranslations } from 'next-intl'
import { SetStateAction } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

interface Theme {
  name: string
  value: string
}

const ThemeController = () => {
  const t = useTranslations('layout')
  const handleThemeChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    if (Cookies.get('cookieConsent') === 'accepted') {
      Cookies.set('theme', event.target.value as string)
    }
  }

  return (
    <div className="dropdown dropdown-top md:dropdown-bottom md:dropdown-end z-40 bg-base-100">
      <div tabIndex={0} role="button" className="btn m-1 btn-ghost">
        {t('themesTitle')}
        <FaArrowDown size={10} className="hidden sm:flex" />
        <FaArrowUp size={10} className="flex sm:hidden" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-300"
      >
        {t.raw('themes').map((theme: Theme) => (
          <li key={theme.value}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={theme.name}
              value={theme.value}
              onChange={handleThemeChange}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ThemeController
