import React from 'react';
import { getState } from 'Services/Store';
import Block from 'components/Block';
import Typography from 'components/Typography';
import Input from 'components/Input';

export default React.memo(({ stateName, index }) => {
	const { 
		options, 
		id 
	} = ((getState()[stateName] || {}).data || [])[index] || {};

	return <form>
		<Block>
		{options.map((item, i) => {
			return <Block key={i}>
				<Input name={id} type="radio" id={`${stateName}-${id}-${item.id}`} />
				<Typography>
					{item.title}
				</Typography>
				{item.text && <Typography>
					{item.text}
				</Typography>}
			</Block>
		})}
		</Block>
	</form>
});
