import { routing } from '@/i18n/routing'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'

import CookiesConsent from '@/components/layout/CookiesConsent'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import {
  englishMetadata,
  japaneseMetadata,
  portugueseMetadata,
  spanishMetadata,
} from '@/metadata/home'

import '../globals.css'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}) {
  return params.locale === 'pt'
    ? portugueseMetadata
    : params.locale === 'es'
      ? spanishMetadata
      : params.locale === 'ja'
        ? japaneseMetadata
        : englishMetadata
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!routing.locales.includes(locale as 'en' | 'pt' | 'es' | 'ja')) {
    notFound()
  }

  const theme = cookies().get('theme')
  const messages = await getMessages()

  return (
    <html data-theme={theme?.value || 'default'} lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <CookiesConsent />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
