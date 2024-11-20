import { useTranslations } from 'next-intl'
import Link from 'next/link'
import LanguageController from './LanguageController'
import NavLink from './NavLink'
import ThemeController from './ThemeController'

interface Link {
  id: string
  link: string
  text: string
  title: string
  description: string
  href: '/' | '/experience' | '/projects' | '/contact'
}

const Navbar = () => {
  const t = useTranslations('core.header')

  return (
    <div className="w-full flex justify-center fixed bg-base-100 shadow-lg z-50 top-0">
      <nav className="flex h-16 w-full justify-between max-w-[88rem] items-center mx-2">
        <Link href={t('NavbarTitleLink')} className="btn btn-ghost text-xl">
          {t('NavbarTitle')}
        </Link>
        <div className="flex items-center space-x-2 translate-x-10">
          {t.raw('NavbarLinks').content.map((link: Link) => (
            <NavLink
              key={link.id}
              content={link}
              linkText={t('NavbarLinks.linkText')}
            />
          ))}
        </div>
        <div className="flex items-center space-x-1">
          <ThemeController />
          <LanguageController />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
