import React from 'react';
import { connect } from 'react-redux';
// import Block from 'components/Block';
import BlockWrapper from './BlockWrapper.jsx';
import OptionsWrapper from './OptionsWrapper.jsx';

export default connect((state, { stateName = '' }) => {
	const { data = [], ...props } = (state[stateName] || {});

	return {
		dataLength: data.length || 0,
		...props
	};
})(React.memo(({
	stateName, 
	dataLength = 0, 
	children,
	...props 
}) => {
	return <BlockWrapper { ...props }>
		{(() => {
			let i = 0,
				collector = [];

			while (i < dataLength) {
				const index = i;
				const item = { ...children };

				item.props = { 
					...children.props, 
					stateName, 
					index,
					questions: () => <OptionsWrapper 
						stateName={stateName}
						index={index} />
				};
				collector.push(<React.Fragment key={index}>
					{item}
				</React.Fragment>);
				i++;
			}
			return collector;
		})()}
	</BlockWrapper>
}));
