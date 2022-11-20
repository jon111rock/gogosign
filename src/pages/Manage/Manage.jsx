import Icon from '@/components/Icon';
import logoImage from '@/assets/gogosign-logo.png';

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
					<div className='flex'>
						<div className='mr-8 btn-manage-mode-select active-light-black'>文件</div>
						<div className='px-14 btn-manage-mode-select'>簽名</div>
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
				</div>
			</div>
		</div>
	);
};

export default Manage;
