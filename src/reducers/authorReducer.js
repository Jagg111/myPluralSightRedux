import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
	switch(action.type) {
		// this action just returns the authors that are passed in on the action
		case types.LOAD_AUTHORS_SUCCESS:
			//debugger;
			return action.authors;
		default:
			return state;
	}
}
