/**
 * Created by maxim.chernin on 15/5/17.
 */
import {ACTIONS} from '../actions/actionTypes';

export default function gameReducer(state = [], action) {
	switch (action.type) {
		case ACTIONS: //todo
			return action.flags;
		default:
			return state;
	}
}

