import { useMemo } from 'react'
import PropTypes from 'prop-types'
import GridViewIcon from '@mui/icons-material/GridView'
import DownloadIcon from '@mui/icons-material/Download'
import ShareIcon from '@mui/icons-material/Share'
import EditIcon from '@mui/icons-material/Edit'
import CloseIcon from '@mui/icons-material/Close'
import GitHubIcon from '@mui/icons-material/GitHub'
import MenuIcon from '@mui/icons-material/Menu'
import MoreVertIcon from '@mui/icons-material/MoreVert'

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
  },
  {
    name: 'moreVertIcon',
    value: <MoreVertIcon />
  }
]

const Icon = ({
  type,
  color = 'text-gray-600',
  active = false,
  onClick = () => {}
}) => {
  const ACTIVE_COLOR = 'text-yellow-500'
  const iconComponent = useMemo(() => {
    return iconList.find((icon) => icon.name === type)?.value || ''
  }, [type])

  const _color = useMemo(() => {
    return active ? ACTIVE_COLOR : color
  }, [color, active])

  const handelClick = () => {
    onClick()
  }

  return (
    <>
      <div
        className={`${_color} cursor-pointer transition-all ease-in duration-3000`}
        onClick={handelClick}
      >
        {iconComponent}
      </div>
    </>
  )
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string
}

export default Icon
