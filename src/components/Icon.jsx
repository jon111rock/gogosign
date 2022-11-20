import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import listIcon from '@/assets/icons/list-icon.svg';
import blockListIcon from '@/assets/icons/block-list-icon.svg';
import downloadIcon from '@/assets/icons/download-icon.svg';
import shareIcon from '@/assets/icons/share-icon.svg';
import editIcon from '@/assets/icons/edit-icon.svg';
import crossIcon from '@/assets/icons/cross-icon.svg';

const icons = [
	{
		name: 'list',
		value: listIcon,
	},
	{
		name: 'block-list',
		value: blockListIcon,
	},
	{
		name: 'download',
		value: downloadIcon,
	},
	{
		name: 'share',
		value: shareIcon,
	},
	{
		name: 'edit',
		value: editIcon,
	},
	{
		name: 'cross',
		value: crossIcon,
	},
];

const Icon = ({ type, size = '1', color = 'black' }) => {
	const [icon, setIcon] = useState();

	useEffect(() => {
		setIcon(
			icons.find((item) => {
				return item.name == type ? item.value : null;
			}).value,
		);
	}, [type]);
	return (
		<>
			<img src={icon} className={`h-${size} text-${color}`} />
		</>
	);
};

Icon.propTypes = {
	type: PropTypes.string.isRequired,
	size: PropTypes.string,
	color: PropTypes.string,
};

export default Icon;
