import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/iconmonstr-shop-2.svg';

import CartIcon from '../CartIcon';
import Cart from '../Cart';

import './Header.styles.scss';

const Header = ({ currentUser, hidden }) => {
	return (
		<div className='header'>
			<Link to='/' className='header__logo-container'>
				<Logo className='header__logo-container__logo' />
			</Link>
			<div className='header__menu'>
				<Link to='/shop' className='header__menu__item'>
					shop
				</Link>
				<Link to='/shop' className='header__menu__item'>
					contact
				</Link>
				{currentUser ? (
					<div className='header__menu__item' onClick={() => auth.signOut()}>
						{currentUser.displayName}
					</div>
				) : (
					<Link to='/signin' className='header__menu__item'>
						Sign In
					</Link>
				)}
				<CartIcon />
			</div>
			{hidden ? null : <Cart />}
		</div>
	);
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden
});

export default connect(mapStateToProps, null)(Header);
