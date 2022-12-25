import { useEffect, useState } from 'react'
import SVGInject from '@iconfu/svg-inject'
import PropTypes from 'prop-types'
import listIcon from '@/assets/icons/list-icon.svg'
import blockListIcon from '@/assets/icons/block-list-icon.svg'
import downloadIcon from '@/assets/icons/download-icon.svg'
import shareIcon from '@/assets/icons/share-icon.svg'
import editIcon from '@/assets/icons/edit-icon.svg'
import crossIcon from '@/assets/icons/cross-icon.svg'
import githubIcon from '@/assets/icons/github-icon.svg'

const icons = [
  {
    name: 'list',
    value: listIcon
  },
  {
    name: 'block-list',
    value: blockListIcon
  },
  {
    name: 'download',
    value: downloadIcon
  },
  {
    name: 'share',
    value: shareIcon
  },
  {
    name: 'edit',
    value: editIcon
  },
  {
    name: 'cross',
    value: crossIcon
  },
  {
    name: 'github',
    value: githubIcon
  }
]

const Icon = ({
  type,
  size = 'h-8',
  color = 'text-gray-600',
  active = false
}) => {
  const [icon, setIcon] = useState()

  useEffect(() => {
    setIcon(
      icons.find((item) => {
        return item.name === type ? item.value : null
      }).value
    )
  }, [type])
  return (
    <>
      <img
        src={icon}
        className={`${size} ${color} cursor-pointer ${
          active ? 'text-yellow-500' : ''
        }`}
        onLoad={(e) => SVGInject(e.target)}
      />
    </>
  )
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string
}

export default Icon
