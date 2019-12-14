import React from 'react';
import Block from 'components/Block';
import Select, {
	Option
} from 'components/Select';
import Input, { 
	InputFile 
} from 'components/Input';
import Button from 'components/Button';
import Typography from 'components/Typography'
import trySignIn from './trySignIn.js';

export default React.memo(() => (
	<form method="POST" action="//localhost:4000/auth" onSubmit={trySignIn}>
		<Block>
			<Input 
				name="name" 
				type="text"
				placeholder="Name" />
			<Input 
				name="surname" 
				type="text"
				placeholder="surname" />
		</Block>
		<Block>
			<Input 
				name="email" 
				type="email"
				placeholder="Email" />
		</Block>
		<Block>
			<Input 
				name="phone" 
				type="phone"
				placeholder="Phone" />
		</Block>
		<Block>
			<InputFile name="avatar" />
		</Block>
		<Select 
			name="age"
			placeholder="Age"
			cssStr={`
				width: 200px;
			`}>
		{(() => {
			let i = 6,
				collector = [];

			while (i < 40) {
				collector.push(<Option 
					key={i} 
					value={i}>
					{i}
				</Option>);
				i++;
			}
			return collector;
		})()}
		</Select>
		<Button type="submit">
			<Typography>
				Send
			</Typography>
		</Button>
		<img id="img" src="" />
	</form>
));
