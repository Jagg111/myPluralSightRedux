// Any new reducers we made need to be added into this root reducer
import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
	courses,
	authors,
	ajaxCallsInProgress
});
//console.log(rootReducer);

export default rootReducer;
