import { FaArrowDown } from 'react-icons/fa'
import { IoLanguage } from 'react-icons/io5'

const LanguageController = () => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1 btn-ghost">
        <IoLanguage size={20} />
        <FaArrowDown size={10} />
      </div>
    </div>
  )
}

export default LanguageController
