/**
 * Created by maxim.chernin on 14/5/17.
 */
import {combineReducers} from 'redux';
import settingsReducer from './settingsReducer';

const rootReducer = combineReducers({
	settingsReducer
});

export default rootReducer;
