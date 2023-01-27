import { useState } from 'react'
import Icon from './Icon'
import PropTypes from 'prop-types'

const DropDown = ({ iconType, items }) => {
  const [open, setOpen] = useState(false)
  const openDropDown = () => {
    setOpen(true)
  }

  return (
    <div className="relative">
      <Icon type={iconType} onClick={openDropDown} />
      {open && (
        <ul className="absolute w-[100px] bg-white flex flex-col items-left justify-center gap-2 rounded-md shadow-md transition-all">
          {items &&
            items.map((item, index) => (
              <li
                className="hover:bg-gray-200 cursor-pointer px-2 py-1 flex gap-3 items-center"
                key={index}
              >
                <Icon type={item.iconType} />
                <span>{item.name}</span>
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
