import PropTypes from 'prop-types';
import Icon from './Icon';

const ManageFileCard = ({ item = {} }) => {
	return (
		<div className='flex flex-col gap-7 p-5 rounded-xl  bg-white shadow-md'>
			<span>{item.name}</span>
			<div className='flex justify-between'>
				<div>
					<span className='mr-14'>{item.createAt}</span>
					<span>{item.fileSize}</span>
				</div>
				<div className='flex items-center gap-2'>
					<Icon type='download' />
					<Icon type='share' />
					<Icon type='edit' />
					<Icon type='cross' />
				</div>
			</div>
		</div>
	);
};

ManageFileCard.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string.isRequired,
		createAt: PropTypes.string.isRequired,
		fileSize: PropTypes.string.isRequired,
	}).isRequired,
};

export default ManageFileCard;
