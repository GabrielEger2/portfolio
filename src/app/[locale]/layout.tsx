import { routing } from '@/i18n/routing'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'

import Footer from '@/components/core/Footer'
import Navbar from '@/components/core/Navbar'

import '../globals.css'

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const theme = cookies().get('theme')
  const messages = await getMessages()

  return (
    <html data-theme={theme?.value || 'default'} lang={locale}>
      <body>
        <Navbar />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
      <Footer />
    </html>
  )
}
