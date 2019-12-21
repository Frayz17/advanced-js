import React from 'react';
import {connect} from 'react-redux';
import { getState } from 'Services/Store';
import Button from 'components/Button';
import Typography from 'components/Typography';

export default React.memo(({ postIndex = 0, children }) => {
	const [ limit, setLimit ] = React.useState(4);
	const commentsLength = (((getState().posts || [])[postIndex] || {}).comments || []).length;
	let i = 0,
		collector = [];

	while (i < limit) {
		const item = { ...children };

		item.props = { ...children.props, commentIndex: i, postIndex };
		collector.push(<React.Fragment key={i}>
			{item}
		</React.Fragment>);
		i++;
	}
	return <>
		{collector}
		{limit < commentsLength && <Button 
			onClick={() => {
				const commentsLength = (((getState().posts || [])[postIndex] || {}).comments || []).length;
				const newLimit = limit + 4;

				setLimit(newLimit > commentsLength ? 
					commentsLength : 
					newLimit);
			}}>
			<Typography>
				Load more (+4)
			</Typography>
		</Button>}
	</>;
});