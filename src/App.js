import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/HomePage';
import HatsPage from './pages/HatsPage';
import ShopPage from './pages/ShopPage';

function App() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route path='/shop/hats' component={HatsPage} />
        </Switch>
    );
}

export default App;
