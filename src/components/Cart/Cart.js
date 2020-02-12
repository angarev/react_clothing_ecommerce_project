import React from 'react';
import CustomButton from '../CustomButton';
import './Cart.styles.scss';

const Cart = () => {
	return (
		<div className='cart'>
			<div className='cart__items'>11</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

export default Cart;
