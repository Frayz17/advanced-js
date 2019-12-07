import React from 'react';

export default React.memo(({
	name = '',
	children = [],
}) => {
	const [ currentValue, setCurrentValue ] = React.useState('');

	return <>
		<input type="hidden" name={name} value={currentValue} />
		<BlockFlex>
			<Button>
				<Icon name="chevron-down" />
			</Button>
			<Typography>
				{currentValue || ''}
			</Typography>
		</BlockFlex>
		<Block>
		{(children || []).map((Option, i) => {
			return <Button 
				key={i} 
				onClick={() => setCurrentValue(i)}>
				{Option}
			</Button>
		})}
		</Block>
	</>
});
