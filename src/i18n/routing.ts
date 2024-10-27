import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'de'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/experience': {
      en: '/experience',
      de: '/erfahrung',
    },
    '/projects': {
      en: '/projects',
      de: '/projekte',
    },
    '/contact': {
      en: '/contact',
      de: '/kontakt',
    },
  },
})

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)
