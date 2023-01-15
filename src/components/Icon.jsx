import { useMemo } from 'react'
import PropTypes from 'prop-types'
import GridViewIcon from '@mui/icons-material/GridView'
import DownloadIcon from '@mui/icons-material/Download'
import ShareIcon from '@mui/icons-material/Share'
import EditIcon from '@mui/icons-material/Edit'
import CloseIcon from '@mui/icons-material/Close'
import GitHubIcon from '@mui/icons-material/GitHub'
import MenuIcon from '@mui/icons-material/Menu'

const iconList = [
  {
    name: 'list',
    value: <MenuIcon />
  },
  {
    name: 'block-list',
    value: <GridViewIcon />
  },
  {
    name: 'download',
    value: <DownloadIcon />
  },
  {
    name: 'share',
    value: <ShareIcon />
  },
  {
    name: 'edit',
    value: <EditIcon />
  },
  {
    name: 'cross',
    value: <CloseIcon />
  },
  {
    name: 'github',
    value: <GitHubIcon />
  }
]

const Icon = ({
  type,
  color = 'text-gray-600',
  active = false
}) => {
  const ACTIVE_COLOR = 'text-yellow-500'
  const iconComponent = useMemo(() => {
    return iconList.find((icon) => icon.name === type)?.value || ''
  }, [type])

  const _color = useMemo(() => {
    return active ? ACTIVE_COLOR : color
  }, [color, active])

  return (
    <>
      <div className={`${_color} cursor-pointer`}>{iconComponent}</div>
    </>
  )
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string
}

export default Icon
