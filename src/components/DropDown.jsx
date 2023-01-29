import { useRef, useState } from 'react'
import Icon from './Icon'
import PropTypes from 'prop-types'

const DropDown = ({ iconType, items }) => {
  const menuRef = useRef(null)
  const [open, setOpen] = useState(false)

  const closeDropDown = (e) => {
    if (menuRef.current && open && !menuRef.current.contains(e.target)) {
      // Click outside
      setOpen(false)
    }
  }
  const openDropDown = (e) => {
    setOpen(true)
  }
  document.addEventListener('mousedown', closeDropDown)

  return (
    <div className="relative">
      <Icon type={iconType} onClick={openDropDown} />
      {open && (
        <ul
          className="absolute w-[100px] bg-white flex flex-col items-left justify-center gap-1 rounded-md shadow-md transition-all"
          ref={menuRef}
        >
          {items &&
            items.map((item, index) => (
              <li
                className="hover:bg-gray-200 cursor-pointer px-2 py-1 flex gap-3 items-center text-sm"
                key={index}
              >
                <Icon type={item.iconType} />
                <span className="text-gray-500">{item.name}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

DropDown.propTypes = {
  iconType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      iconType: PropTypes.string.isRequired
    })
  ).isRequired
}

export default DropDown
