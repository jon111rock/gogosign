import logoImage from '@/assets/gogosign-logo.png';
import listIcon from '@/assets/icons/list-icon.svg';
import blockListIcon from '@/assets/icons/block-list-icon.svg';
import downloadIcon from '@/assets/icons/download-icon.svg';
import shareIcon from '@/assets/icons/share-icon.svg';
import editIcon from '@/assets/icons/edit-icon.svg';
import crossIcon from '@/assets/icons/cross-icon.svg';

const Manage = () => {
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
					<input className='p-3 w-64 rounded-xl outline-0 text-sm' placeholder='Search'></input>
					<div className='flex gap-2 items-center'>
						<img src={listIcon} className='h-4' />
						<img src={blockListIcon} className='h-7' />
					</div>
				</div>
				<hr />
				{/* files list */}
				<div className='flex flex-col gap-5 mt-10'>
					<div className='flex flex-col gap-7 p-5 rounded-xl  bg-white shadow-md'>
						<span>文件01</span>
						<div className='flex justify-between'>
							<div>
								<span className='mr-14'>2022/11/11 23:15:21</span>
								<span>100KB</span>
							</div>
							<div className='flex items-center gap-2'>
								<img src={downloadIcon} className='h-6' />
								<img src={shareIcon} className='h-6' />
								<img src={editIcon} className='h-6' />
								<img src={crossIcon} className='h-4' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Manage;
