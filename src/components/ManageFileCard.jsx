import Icon from "./Icon"

const ManageFileCard = () => {
  return (
    <div className='flex flex-col gap-7 p-5 rounded-xl  bg-white shadow-md'>
    <span>文件01</span>
    <div className='flex justify-between'>
      <div>
        <span className='mr-14'>2022/11/11 23:15:21</span>
        <span>100KB</span>
      </div>
      <div className='flex items-center gap-2'>
        <Icon type='download' />
        <Icon type='share' />
        <Icon type='edit' />
        <Icon type='cross' />
      </div>
    </div>
  </div>
  )
}

export default ManageFileCard