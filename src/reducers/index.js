import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
	courses
});
//console.log(rootReducer);

export default rootReducer;