import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

// loadCoursesSuccess action creator that takes a list of courses
// this will have a corresponding handler (a reducer)
export function loadCoursesSuccess(courses) {
	//debugger;
	return {type: types.LOAD_COURSES_SUCCESS, courses};
}
export function createCourseSuccess(course) {
	return {type: types.CREATE_COURSE_SUCCESS, course};
}
export function updateCourseSuccess(course) {
	return {type: types.UPDATE_COURSE_SUCCESS, course};
}

// now for the thunk
export function loadCourses() {
	return function(dispatch) {
		// dispatch the action creator for beginAjaxCall
		dispatch(beginAjaxCall());
		// here the API returns a promise ideally in this case a list of courses
		// some people will make fetch or AJAX calls right here in the function
		return courseApi.getAllCourses().then(courses => {
			// now we dispatch an action creator (the one we made above)
			dispatch(loadCoursesSuccess(courses));
		// and now some basic error handling
		}).catch(error => {
			throw(error);
		});
	};
}

// new thunk for saving courses
export function saveCourse(course) { // passing course into the form as a param
	return function (dispatch, getState) { //getState allows us to grab things from redux store to work with it during our thunk
		// dispatch the action creator for beginAjaxCall
		dispatch(beginAjaxCall());
		return courseApi.saveCourse(course).then(savedCourse => {
			course.id ? dispatch(updateCourseSuccess(savedCourse)) : //checking for an ID to determine update vs create
				dispatch(createCourseSuccess(savedCourse));
		}).catch(error => {
			dispatch(ajaxCallError(error));
			throw(error);
		});
	};
}
