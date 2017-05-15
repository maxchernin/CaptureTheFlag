import {ACTIONS} from './actionTypes';
function saveSettingsSuccess(settings) {

	return {type: ACTIONS.SAVE_SETTINGS_SUCCESS, query, settings};
}


export function saveSettings() {
	return function (dispatch) {
		// return api.get().then(response => {
		//
		// })
		return dispatch(saveSettingsSuccess('response should be here'));
	}
}

export default {filterNode};