import { useState } from 'react'
import ManageFileCard from '@/components/ManageFileCard'
import Icon from '@/components/Icon'

import signedFiles from '@/mocks/signedFiles' // mock data
import logoImage from '@/assets/gogosign-logo.png'

const Manage = () => {
  const [items] = useState(signedFiles.data) // get data
  const [layout, setLayout] = useState('list')
  const [manageMode, setManageMode] = useState('file')

  const handleManageModeClick = (event) => {
    setManageMode(event)
  }

  return (
    <div className="h-screen bg-yellow-100 overflow-auto">
      <div className="pt-8 w-3/4 m-auto">
        {/* header */}
        <div className="flex items-center justify-between">
          <img src={logoImage} className="h-10" />
          <span>Yuton</span>
        </div>
        {/* control panel */}
        <div className="flex items-center justify-between mt-10 pb-5">
          <div className="flex">
            <div
              className={`mr-8 btn-manage-mode-select ${
                manageMode === 'file' ? 'active-light-black' : ''
              }
							transition duration-300`}
              onClick={() => {
                handleManageModeClick('file')
              }}
            >
              文件
            </div>
            <div
              className={`px-14 btn-manage-mode-select  ${
                manageMode === 'sign' ? 'active-light-black' : ''
              }
							transition duration-300`}
              onClick={() => {
                handleManageModeClick('sign')
              }}
            >
              簽名
            </div>
          </div>
          {/* List / Block */}
          <div className="flex gap-20">
            <input
              className="p-3 w-64 rounded-xl outline-0 text-sm"
              placeholder="Search"
            />
            {manageMode === 'file' ? (
              <div className="flex gap-2 items-center">
                <Icon
                  type="list"
                  onClick={() => {
                    setLayout('list')
                  }}
                  active={layout === 'list'}
                />
                <Icon
                  type="block-list"
                  onClick={() => {
                    setLayout('block')
                  }}
                  active={layout === 'block'}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <hr />
        {/* files content */}
        {manageMode === 'file' ? (
          layout === 'list' ? (
            <div className="flex flex-col gap-5 mt-10">
              {items.map((item) => (
                <ManageFileCard key={item.id} item={item} type="list" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-4 grid-flow-row place-items-center pt-10 pb-10">
              {items.map((item) => (
                <ManageFileCard key={item.id} item={item} type="block" />
              ))}
            </div>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Manage
