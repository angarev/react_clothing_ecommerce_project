import React from 'react';
import './CollectionItem.styles.scss';
import CustomButton from '../CustomButton';

const CollectionItem = ({ id, name, price, imageUrl }) => {
	return (
		<div className='collection-item'>
			<div
				className='collection-item__image'
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<div className='collection-item__footer'>
				<span className='collection-item__footer__name'>{name}</span>
				<span className='collection-item__footer__price'>{price}</span>
			</div>
			<CustomButton inverted>Add to cart</CustomButton>
		</div>
	);
};

export default CollectionItem;
