import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/HomePage';
import HatsPage from './pages/HatsPage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';

function App() {
	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route path='/shop/hats' component={HatsPage} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
