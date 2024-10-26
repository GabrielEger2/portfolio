'use client'

import { themeOptions, themeTitle } from '@/content/layout/ThemeController'
import Cookies from 'js-cookie'
import { SetStateAction } from 'react'
import { FaArrowDown } from 'react-icons/fa'

const ThemeController = () => {
  const handleThemeChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    if (Cookies.get('cookieConsent') === 'accepted') {
      Cookies.set('theme', event.target.value as string)
    }
  }

  return (
    <div className="dropdown dropdown-end z-50">
      <div tabIndex={0} role="button" className="btn m-1 btn-ghost">
        {themeTitle}
        <FaArrowDown size={10} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-300"
      >
        {themeOptions.map((theme) => (
          <li key={theme}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)}
              value={theme}
              onChange={handleThemeChange}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ThemeController
