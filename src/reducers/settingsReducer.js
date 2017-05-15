/**
 * Created by maxim.chernin on 15/5/17.
 */
import {ACTIONS} from '../actions/actionTypes';

export default function settingsReducer(state = [], action) {
	switch (action.type){
		case ACTIONS.SAVE_SETTINGS_SUCCESS:
			return action.settings;
		default:
			return state;
	}
}