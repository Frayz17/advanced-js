import React from 'react';
import { connect } from 'react-redux';

export default connect((state, props) => {
	return {
		// x: state.test.x,
	};
})(React.memo(({ history }) => {
	return <b>Home page</b>
}));