import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/HomePage';
// import HatsPage from './pages/HatsPage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import SignInAndSingnUp from './pages/SignInAndSingnUp';

function App() {
	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route path='/signin' component={SignInAndSingnUp} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
