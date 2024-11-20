import { routing } from '@/i18n/routing'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'

import CookiesConsent from '@/components/layout/CookiesConsent'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

import '../globals.css'

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
