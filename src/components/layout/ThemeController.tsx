import {
  themeOptions,
  themeTitle,
} from '@/content/layout/ThemeControllerContent'
import { FaArrowDown } from 'react-icons/fa'

const ThemeController = () => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1 btn-ghost">
        {themeTitle}
        <FaArrowDown size={10} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-300"
      >
        {themeOptions.map((theme) => (
          <li key={theme}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={theme}
              value={theme}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ThemeController
