import React from 'react';
import CustomButton from '../CustomButton';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem';
import './Cart.styles.scss';

const Cart = () => {
	const cartItems = useSelector(state => state.cart.cartItems);
	return (
		<div className='cart'>
			<div className='cart__items'>
				{cartItems.map(cartItem => (
					<CartItem key={cartItem.id} item={cartItem} />
				))}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

export default Cart;
