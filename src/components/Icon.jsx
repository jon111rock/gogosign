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
    value: MenuIcon
  },
  {
    name: 'block-list',
    value: GridViewIcon
  },
  {
    name: 'download',
    value: DownloadIcon
  },
  {
    name: 'share',
    value: ShareIcon
  },
  {
    name: 'edit',
    value: EditIcon
  },
  {
    name: 'cross',
    value: CloseIcon
  },
  {
    name: 'github',
    value: GitHubIcon
  }
]

const Icon = ({
  type,
  color = 'text-gray-600',
  active = false,
  size = 25,
  cursor = 'pointer'
}) => {
  const ACTIVE_COLOR = 'text-yellow-500'
  const iconComponent = useMemo(() => {
    const Component = iconList.find((icon) => icon.name === type)?.value || ''
    return <Component sx={{ fontSize: size }} />
  }, [type, size])

  const _color = useMemo(() => {
    return active ? ACTIVE_COLOR : color
  }, [color, active])

  const _cursorPoint = useMemo(() => {
    return `cursor-${cursor}`
  }, [cursor])

  return (
    <>
      <div className={`${_color} ${_cursorPoint}`}>{iconComponent}</div>
    </>
  )
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  cusrsorPointer: PropTypes.bool
}

export default Icon
