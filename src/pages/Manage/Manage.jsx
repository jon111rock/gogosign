import { useState } from 'react';
import ManageFileCard from '@/components/ManageFileCard';
import Icon from '@/components/Icon';

import signedFiles from '@/mocks/signedFiles'; // mock data
import logoImage from '@/assets/gogosign-logo.png';

const Manage = () => {
	const [items] = useState(signedFiles.data); // get data
	const [listMode, setListMode] = useState('list');
	const [manageMode, setManageMode] = useState('file');

	const handleManageModeClick = (event) => {
		setManageMode(event)
	};

	return (
		<div className='h-screen bg-gogosign-light-yellow'>
			<div className='pt-8 w-3/4 m-auto'>
				{/* header */}
				<div className='flex items-center justify-between'>
					<img src={logoImage} className='h-10' />
					<span>Yuton</span>
				</div>
				{/* control panel */}
				<div className='flex items-center justify-between mt-10 pb-5'>
					<div className='flex'>
						<div
							className={`mr-8 btn-manage-mode-select ${
								manageMode == 'file' ? 'active-light-black' : ''
							}
							transition duration-300`}
							onClick={() => {
								handleManageModeClick('file');
							}}
						>
							文件
						</div>
						<div
							className={`px-14 btn-manage-mode-select  ${
								manageMode == 'sign' ? 'active-light-black' : ''
							}
							transition duration-300`}
							onClick={() => {
								handleManageModeClick('sign');
							}}
						>
							簽名
						</div>
					</div>
					<div className='flex gap-20'>
						<input className='p-3 w-64 rounded-xl outline-0 text-sm' placeholder='Search'></input>
						<div className='flex gap-2 items-center'>
							<Icon type='list' />
							<Icon type='block-list' />
						</div>
					</div>
				</div>
				<hr />
				{/* files list */}
				<div className='flex flex-col gap-5 mt-10'>
					{items.map((item) => (
						<ManageFileCard key={item.id} item={item}></ManageFileCard>
					))}
				</div>
			</div>
		</div>
	);
};

export default Manage;
