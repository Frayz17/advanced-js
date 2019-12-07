import React from 'react';
import {connect} from 'react-redux';
import Block from 'components/Block';


export default connect((state, { index = 0 }) => {
	const {
		comments
	} = (state.posts || [])[index];

	return comments;
})(React.memo(({
	title = ''
}) => {
	return <>
	<Block>
		Hello
	</Block>
	</>;
}));