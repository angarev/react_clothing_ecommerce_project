import React from 'react';
import './CollectionItem.styles.scss';
import CustomButton from '../CustomButton';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
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
			<CustomButton inverted onClick={() => addItem(item)}>
				Add to cart
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);
