import PropTypes from 'prop-types'
import Icon from './Icon'
import DropDown from './DropDown'

const ManageFileCard = ({ item = {}, type = 'list' }) => {
  return (
    <>
      {type === 'list' ? (
        <div className="flex flex-col gap-7 p-5 rounded-xl  bg-white shadow-md">
          <span>{item.name}</span>
          <div className="flex justify-between">
            <div>
              <span className="mr-14">{item.createAt}</span>
              <span>{item.fileSize}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon type="download" />
              <Icon type="share" />
              <Icon type="edit" />
              <Icon type="cross" />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full px-12">
          <img className=" h-[365px] bg-white" src="/" />
          <div className="grid grid-cols-[0.9fr_0.1fr] place-items-center mt-1">
            <div className="text-gray-500">{item.name}</div>
            {/* TODO: DropDown */}
            <DropDown
              iconType="moreVertIcon"
              items={[
                {
                  name: '下載',
                  iconType: 'download'
                },
                {
                  name: '分享',
                  iconType: 'share'
                },
                {
                  name: '編輯',
                  iconType: 'edit'
                },
                {
                  name: '刪除',
                  iconType: 'cross'
                }
              ]}
            />
          </div>
        </div>
      )}
    </>
  )
}

ManageFileCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    createAt: PropTypes.string.isRequired,
    fileSize: PropTypes.string.isRequired
  }).isRequired,
  type: PropTypes.string.isRequired
}

export default ManageFileCard
