import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/iconmonstr-shop-2.svg';

import './Header.styles.scss';

const Header = () => {
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
			</div>
		</div>
	);
};

export default Header;
