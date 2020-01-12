import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import HatsPage from './pages/HatsPage';

function App() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/hats' component={HatsPage} />
        </Switch>
    );
}

export default App;
