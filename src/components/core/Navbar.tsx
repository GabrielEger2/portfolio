import LanguageController from '../layout/LanguageController'
import NavLink from '../layout/NavLink'
import ThemeController from '../layout/ThemeController'

import { NavbarLinks, NavbarTitle } from '@/content/core/NavbarContent'

const Navbar = () => {
  return (
    <div className="w-full flex justify-center fixed bg-base-100 shadow-lg z-50">
      <nav className="flex h-16 w-full justify-between max-w-[88rem] items-center mx-2">
        <a className="btn btn-ghost text-xl">{NavbarTitle}</a>
        <div className="flex items-center space-x-2 translate-x-10">
          {NavbarLinks.content.map((link) => (
            <NavLink
              key={link.id}
              content={link}
              linkText={NavbarLinks.linkText}
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
