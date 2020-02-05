import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/HomePage';
// import HatsPage from './pages/HatsPage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import SignInAndSingnUp from './pages/SignInAndSingnUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
	state = {
		currentUser: null
	};

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			createUserProfileDocument(userAuth);

			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			}

			this.setState({ currentUser: userAuth });
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
