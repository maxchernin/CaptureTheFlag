import {ACTIONS} from './actionTypes';
function filterNode(query, nodes) {

	return {type: ACTIONS, query, nodes};
}

export default {filterNode};