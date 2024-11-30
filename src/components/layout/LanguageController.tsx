'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { SetStateAction, useTransition } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { IoLanguage } from 'react-icons/io5'

interface Language {
  name: string
  value: string
}

const LanguageController = () => {
  const t = useTranslations('layout')
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const localActive = useLocale()

  const handleLanguageChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    const locale = event.target.value as string
    startTransition(() => {
      router.replace(`/${locale}`)
    })
  }

  return (
    <div className="dropdown dropdown-top md:dropdown-bottom md:dropdown-end z-50 bg-base-100">
      <div tabIndex={0} role="button" className="btn m-1 btn-ghost">
        <IoLanguage size={20} />
        <FaArrowDown size={10} className="hidden sm:flex" />
        <FaArrowUp size={10} className="flex sm:hidden" />
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
              defaultValue={localActive}
              disabled={isPending}
              onChange={handleLanguageChange}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LanguageController
