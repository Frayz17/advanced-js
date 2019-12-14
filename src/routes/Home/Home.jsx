import Slider from 'modules/Slider';
import React from 'react';
import { connect } from 'react-redux';

export default connect((state, props) => {
	return {};
})(React.memo(() => {
	return <>
		<b>Home page</b>
		<Slider />
	</>}));