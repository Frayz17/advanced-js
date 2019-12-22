import React from 'react';
import { connect } from 'react-redux';
import { STATE_HOME_TEST } from './consts.js';
import TestForm from 'modules/TestForm';
// import { withRouter } from 'react-router-dom';

const QuestionVariant1 = React.memo(({ children }) => {
	return <>
		{children}
	</>;
});
const QuestionVariant2 = React.memo(({ children }) => {
	return <>
		{children}
	</>;
});
const QuestionVariant3 = React.memo(({ children }) => {
	return <>
		{children}
	</>;
});

const emptyFunc = () => '';
const QuestionTypes = {
	QuestionVariant1,
	QuestionVariant2,
	QuestionVariant3
};
const Question = connect((state, { index, stateName }) => {
	const { 
		options = [], 
		...props 
	} = (((state[stateName] || {}).data || [])[index] || {});

	return {
		optionsLength: options.length || 0,
		...props
	};
})(React.memo(({ type = 'QuestionVariant1', questions = emptyFunc }) => {
	const Root = QuestionTypes[type];

	return <Root>
		{questions()}
	</Root>;
}));
Question.defaultProps = {
	index: 0,
	stateName: '',
};

export default connect((state, props) => {
  return {
    // x: state.test.x
  };
})(
  React.memo(({ history }) => {
    return <>
    	<b>Home Page</b>
    	<TestForm stateName={STATE_HOME_TEST}>
    		<Question />
    	</TestForm>
    </>;
  })
);
