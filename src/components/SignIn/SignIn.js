import React, { Component } from 'react';
import './SignIn.styles.scss';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

import { auth, sightInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
	state = {
		email: '',
		password: ''
	};

	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (error) {
			console.log(error);
		}

		this.setState({ email: '', password: '' });
	};

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-in'>
				<h2 className='sign-in__title'>I already have an account</h2>
				<span className='sign-in__subtitle'>
					Sign in with your email and password
				</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						id='email'
						type='email'
						value={this.state.email}
						label='Email'
						onChange={this.handleChange}
						required
					/>
					<FormInput
						id='password'
						name='password'
						type='password'
						label='Password'
						value={this.state.password}
						onChange={this.handleChange}
						required
					/>

					<div className='sign-in__buttons'>
						<CustomButton type='submit'>sign In</CustomButton>
						<CustomButton onClick={sightInWithGoogle} isGoogleSignIn>
							sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
