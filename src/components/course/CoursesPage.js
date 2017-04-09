// This is our 'container component'
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component{
	// constructor is the first major piece of a container component
	constructor(props, context) {
		super(props, context);
		//bind within the constructor
		this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind();
	}

	// child function called by render
	courseRow(course, index) {
		return <div key={index}>{course.title}</div>;
	}

	redirectToAddCoursePage() {
		browserHistory.push('/course');
	}

	// render function where we would typically call a child compnent but here we kept it simple by including it all here
	render() {
		//debugger;
		// this is destructing to keep future calls/references short within this render
		// could also use this.props.courses if we didnt use the const
		const {courses} = this.props;

		return (
			<div>
				<h1>Courses</h1>
				<input type="submit"
							value="Add Course"
							className="btn btn-primary"
							onClick={this.redirectToAddCoursePage}/>
				<CourseList courses={courses}/>
			</div>
		);
	}
}

// prop type validation
CoursesPage.propTypes = {
	//dispatch: PropTypes.func.isRequired,   //This is no longer needed since we defined mapDispatchToProps
	actions: PropTypes.object.isRequired,
	courses: PropTypes.array.isRequired
};

// redux mapStateToProps function
function mapStateToProps(state, ownProps) {
	//debugger;
	return {
		courses: state.courses
	};
}
// redux mapDispatchToProps function
function mapDispatchToProps (dispatch) {
	return {
		//createCourse: course => dispatch(courseActions.createCourse(course))
		//imported bindActionCreators SO THAT I can just bring in all courseActions under a new prop called actions
		actions: bindActionCreators(courseActions, dispatch)
	};
}
// redux connection
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
