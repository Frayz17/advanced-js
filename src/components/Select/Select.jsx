import React from 'react';
import Block, { 
	BlockFlex 
} from 'components/Block';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Typography from 'components/Typography';

export default React.memo(({
	name = '',
	children = [],
}) => {
	const [ currentValue, setCurrentValue ] = React.useState('');
	const [ openFlag, setOpenFlag ] = React.useState(false);
	const listRef = React.useRef(null);

	return <>
		<input type="hidden" name={name} value={currentValue} />
		<BlockFlex>
			<Button type="button" onClick={() => setOpenFlag(!openFlag)}>
				<Icon name="chevron-down" />
			</Button>
			<Typography>
				{currentValue || ''}
			</Typography>
		</BlockFlex>
		<Block 
			ref={listRef}
			style={{
				display: openFlag ?
					'block' :
					'none'
			}}>
		{(children || []).map((Option, i) => {
			return <Button 
				key={i} 
				type="button"
				onClick={() => {
					const currentBtnNode = (listRef.current || {}).childNodes[i];

					if (currentBtnNode) {
						setCurrentValue(currentBtnNode.childNodes[0].dataset['option'] || currentValue);
					}
				}}>
				{Option}
			</Button>
		})}
		</Block>
	</>
});
