import LanguageController from '../layout/LanguageController'
import NavLink from '../layout/NavLink'
import ThemeController from '../layout/ThemeController'

const Navbar = () => {
  return (
    <div className="w-full flex justify-center fixed bg-base-100 shadow-lg">
      <nav className="flex h-16 w-full justify-between max-w-[88rem] items-center mx-2">
        <a className="btn btn-ghost text-xl">GSEDev</a>
        <div className="flex items-center space-x-8 translate-x-10">
          <NavLink />
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
