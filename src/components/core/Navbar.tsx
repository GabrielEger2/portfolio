import NavLink from '../layout/NavLink'

const Navbar = () => {
  return (
    <div className="w-full flex justify-center fixed bg-base-100 shadow-lg">
      <nav className="flex h-16 w-full justify-between max-w-[88rem] items-center mx-2">
        <a className="btn btn-ghost text-xl">GS. Eger</a>
        <div className="flex items-center space-x-6">
          <NavLink />
          <button className="btn btn-outline btn-primary">Contact Me</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
