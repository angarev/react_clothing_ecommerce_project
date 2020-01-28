import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/HomePage';
// import HatsPage from './pages/HatsPage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import SignInAndSingnUp from './pages/SignInAndSingnUp';
import { auth } from './firebase/firebase.utils';

class App extends Component {
	state = {
		currentUser: null
	};

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<React.Fragment>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInAndSingnUp} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;
