'use client'

import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import Block from './Block'

interface Theme {
  name: string
  value: string
}

const PageBlock = () => {
  const [theme, setTheme] = useState('lemonade')
  const t = useTranslations('')
  const themes = t.raw('layout.themes')

  return (
    <Block className="col-span-12 row-span-3 lg:col-span-9">
      <div data-theme={theme} className="h-full card">
        <div className="navbar bg-base-100 border border-base-200">
          <div className="flex-1">
            <a className="p-2 font-semibold text-xl">
              {t('home.pageBlock.navbar')}
            </a>
          </div>
          <div className="flex-none">
            <select
              onChange={(e) => setTheme(e.target.value)}
              className="select w-full max-w-xs border border-base-300"
            >
              <option disabled selected>
                {t('layout.themesTitle')}
              </option>
              {themes.map((theme: Theme) => (
                <option key={theme.value} value={theme.value}>
                  {theme.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="h-full flex justify-center items-center">
          <div className="flex flex-row hero-content bg-base-200 card m-6">
            <div className="lg:w-96 h-64 bg-primary card" />
            <div className="p-6">
              <h1 className="text-5xl font-bold">
                {t('home.pageBlock.title')}
              </h1>
              <p className="py-6">{t('home.pageBlock.text')}</p>
              <Link
                href={t('home.pageBlock.link') as '/contact'}
                className="btn btn-primary"
              >
                {t('home.pageBlock.linkText')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Block>
  )
}

export default PageBlock
