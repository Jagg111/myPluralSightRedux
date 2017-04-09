import * as types from '../actions/actionTypes';
import initialState from './initialState';

// here we are just dealing with the 'courses' slice of our store
export default function courseReducer(state = initialState.courses, action) {
	switch(action.type) {
		// this action just returns the courses that are passed in on the action
		case types.LOAD_COURSES_SUCCESS:
			//debugger;
			return action.courses;

		case types.CREATE_COURSE_SUCCESS:
			// remember state is immutable so we can't push a value in
			return [
				//this is a spread operator to expand out the array of courses in state
				...state, // now we can include the new course that was just saved in the new array we are creating
				Object.assign({}, action.course)
			];

		case types.UPDATE_COURSE_SUCCESS:
			return [
				// use filter to get a list of all the courses except the one being updated
				// use spread operator on the front to create a new array out of the filtered results
				...state.filter(course => course.id !== action.course.id),
				// now create a copy of the course passed in and include it in the array that we are returning
				Object.assign({}, action.course)
			];

		default:
			return state;
	}
}
