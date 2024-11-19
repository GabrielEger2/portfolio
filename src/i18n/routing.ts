import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'pt', 'es', 'ja'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/experience': {
      en: '/experience',
      pt: '/experiencia',
      es: '/experiencia',
      ja: '/経験',
    },
    '/projects': {
      en: '/projects',
      pt: '/projetos',
      es: '/proyectos',
      ja: '/プロジェクト',
    },
    '/contact': {
      en: '/contact',
      pt: '/contato',
      es: '/contacto',
      ja: '/連絡',
    },
  },
})

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)
