import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import RootReducer from './RootReducer';

const middlewares = [logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	RootReducer,
	composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
