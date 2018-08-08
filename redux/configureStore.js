import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { dishes } from './dishes';
import { commets } from './coments';
import { promotions } from './promotions';
import { leaders } from './leaders';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			dishes,
			coments,
			promotions,
			leaders
		}),
		applyMiddleware(thunk, logger)
	);
	return store;
};
