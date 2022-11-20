import logoImage from '@/assets/gogosign-logo.png';
import listIcon from '@/assets/list-icon.svg';
import blockListIcon from '@/assets/block-list-icon.svg';

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
				<div></div>
			</div>
		</div>
	);
};

export default Manage;
