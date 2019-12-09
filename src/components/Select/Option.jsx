import React from 'react';
import Typography from 'components/Typography';

export default React.memo(({ children = [], value = '' }) => (
	<Typography data-option={value}>
		{children}
	</Typography>
));
