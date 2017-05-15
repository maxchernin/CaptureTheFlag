/**
 * Created by maxim.chernin on 14/5/17.
 */
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function (initialState) {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunk)
	);
}