import React from 'react';
import './SignInAndSingnUp.styles.scss';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

const SignInAndSingnUp = () => {
	return (
		<div className='sign-in-and-singn-up'>
			<SignIn />
			<SignUp />
		</div>
	);
};

export default SignInAndSingnUp;
