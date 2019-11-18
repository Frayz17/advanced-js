import React from 'react';
import styled from 'styled-components';
import { BlockFlex } from 'components/Block';
import { ButtonLink } from 'components/Button';

const StyledBlockFlex = styled(BlockFlex)`
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 576px) {

	}
`;

export default connect((state) => {
	return {
		link: (state.nav || {}).link || '/',
	}
})(React.memo(({
	link,
}) => {
	const mainCheck = link === '/';

	const a = await import('http://google.com/test.json');

	return <StyledBlockFlex>
		<ButtonLink 
			to="/"
			disabled={mainCheck}
			style={mainCheck ? {
				color: 'red',
			} : {
				color: 'green'
			}}>
			<Typography>
				Main
			</Typography>
		</ButtonLink>

		<ButtonLink 
			to="/"
			disabled={mainCheck}
			style={mainCheck ? {
				color: 'red',
			} : {
				color: 'green'
			}}>
			<Typography>
				Main
			</Typography>
		</ButtonLink>
	</StyledBlockFlex>
}));
