import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getState } from 'Services/Store'
import Block, { 
	BlockFlex 
} from 'components/Block';
import Button, { 
	ButtonLink 
} from 'components/Button';
import Typography from 'components/Typography';
import Icon from 'components/Icon';
import onDisplayMenu from './onDisplayMenu.js';

const StyledBlockFlex = styled(BlockFlex)`
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 576px) {
		display: ${({ displayMenuFlag = false }) => displayMenuFlag ? 
			'block' : 
			'none'};
		& > a {
			display: block;
			line-height: 24px;
		}
	}
`;
const StyledButton = styled(Button)`
	display: none;
	position: absolute;
	top: 0;
	right: 0;

	@media screen and (max-width: 576px) {
		display: block;
	}
`;

export default withRouter(connect((state) => {
	return {
		displayMenuFlag: (state.menu || {}).displayMenuFlag || false,
	};
})(React.memo(({
	history,
	displayMenuFlag,
}) => {
	const { nav: { links = [] } } = getState();

	return <Block
		style={{
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			zIndex: 2,
			backgroundColor: '#FFF'
		}}>
		<StyledBlockFlex displayMenuFlag={displayMenuFlag}>
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
		<StyledButton onClick={onDisplayMenu}>
			<Icon name={displayMenuFlag ? 'times' : 'bars'} />
		</StyledButton>
	</Block>
})));
