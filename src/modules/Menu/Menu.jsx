import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getState } from 'Services/Store'
import { BlockFlex } from 'components/Block';
import { ButtonLink } from 'components/Button';
import Typography from 'components/Typography';

const StyledBlockFlex = styled(BlockFlex)`
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 576px) {

	}
`;

export default withRouter(connect((state) => {
	return {
		// link: (state.nav || {}).link || '/',
	};
})(React.memo(({
	history,
}) => {
	const { nav: { links = [] } } = getState();
	const [ testFlag, setTestFlag ] = React.useState(false);

	// onMount
	React.useEffect(() => {
		console.log('onMount')
	}, []);

	// onUnmount
	React.useEffect(() => () => {
		console.log('onMount')
	}, []);

	// onTestFlagUpdated
	React.useEffect(() => {
		console.log('onTestFlagUpdated', testFlag)
	}, [ testFlag ]);

	// onLinkUpdated
	React.useEffect(() => {
		console.log('onLinkUpdated', history.location.pathname)
	}, [ history.location.pathname ]);

	setTimeout(() => {
		setTestFlag(true);
	}, 5000);

	return <StyledBlockFlex>
		{links.map(({ 
			path = '/',
			title = 'No name', 
		}, i) => {
			const isActiveFlag = history.location.pathname === path;

			return <ButtonLink 
				key={i}
				to={path}
				disabled={isActiveFlag}
				style={isActiveFlag ? {
					color: 'blue',
				} : {
					color: 'green'
				}}>
				<Typography>
					{title}
				</Typography>
			</ButtonLink>
		})}
	</StyledBlockFlex>
})));
