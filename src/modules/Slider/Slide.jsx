import React from 'react';

import Serial from './Serial.jsx';
import Movie from './Movie.jsx';
import Default from './Default.jsx';

const Slide = {
	Serial,
	Movie,
	Default,
};

export default connect((state, { index = 0 }) => {
	return {
		type: (state['sliders'][index] || {}).type || 'Default',
	}
})(React.memo(({
	type,
}) => {
	const Component = Slide[type];

	return <Component />;
}));
