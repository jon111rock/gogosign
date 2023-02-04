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

/**
 * <Icon
 *  type={ 圖標類型，例如: "github" }
 *  color={ tailwind格式顏色，預設"text-gray-600"，例如: "text-gray-400" }
 *  active={ 是否為啟用樣式，預設false，傳入true的顏色改為text-yellow-500，false為color所傳入的顏色 }
 *  size={ 圖標大小，預設為25，傳入number }
 *  cursor={ cursor的類型，預設cursor-pointer，例如: "cursor-move"、"cursor-wait"...... }
 * />
 */

const Icon = ({
  type,
  color = 'text-gray-600',
  active = false,
  size = 25,
  cursor = 'cursor-pointer'
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
    return cursor
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
