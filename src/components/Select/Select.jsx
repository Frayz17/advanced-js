import React from 'react';
import Block, { 
	BlockFlex 
} from 'components/Block';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Typography from 'components/Typography';

let isOption = false;

export default React.memo(({
	name = '',
	children = [],
	placeholder,
	...props
}) => {
	const [ state, setState ] = React.useState({
		currentValue: placeholder || '',
		openFlag: false,
	});
	const [ onOutsideClick ] = React.useState(() => () => {
		!isOption && setState({ ...state, openFlag: false });
	});
	const listRef = React.useRef(null);
	const value = state.openFlag;

	// onUpdatedState
	React.useEffect(() => {
		if (value) {
			document.addEventListener('click', onOutsideClick);
		}
		else {
			document.removeEventListener('click', onOutsideClick);
			isOption = false;
		}
	}, [ 
		value, 
		onOutsideClick 
	]);

	return <Block { ...props }>
		<input type="hidden" name={name} value={state.currentValue} />
		<BlockFlex>
			<Button 
				className="button" 
				type="button" 
				onClick={() => setState({ 
					...state, 
					openFlag: !state.openFlag 
				})}>
				<Icon name="chevron-down" />
			</Button>
			<Typography className="placeholder">
				{state.currentValue || ''}
			</Typography>
		</BlockFlex>
		<Block 
			ref={listRef}
			style={{
				zIndex: 9,
				width: '100%',
				position: 'absolute',
				display: state.openFlag ?
					'block' :
					'none'
			}}>
		{(children || []).map((Option, i) => {
			return <Button 
				key={i} 
				type="button"
				className="option"
				style={{
					display: 'block',
					width: '100%'
				}}
				onClick={() => {
					const currentBtnNode = (listRef.current || {}).childNodes[i];

					if (currentBtnNode) {
						isOption = true;
						setState({
							currentValue: currentBtnNode.childNodes[0].dataset['option'] || state.currentValue,
							openFlag: false,
						});
					}
				}}>
				{Option}
			</Button>
		})}
		</Block>
	</Block>
});
