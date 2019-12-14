import React from 'react';
import { Route, withRouter } from 'react-router-dom';

export default withRouter(React.memo(({ 
	children = [], 
	title = '', 
	description = '',
	...props 
}) => {
	if (!!title) {
		document.title = title;
	}
	[ ...document.head.childNodes ].forEach((item) => {
		if (item.nodeName === 'META' && item.name) {
			if (!!description && item.name === 'description') {
				item.content = description;
			}
		}
	});

	return <Route { ...props }>
		{children}
	</Route>
}));
