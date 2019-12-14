import React from 'react';
import Select, { Option } from 'components/Select';
import Input from 'components/Input';
import Button from 'components/Button';
import Typography from 'components/Typography';
import trySignIn from './trySignIn.jss';

export default React.memo(()=>(
	<form method="post" action="//localhost:4000/auth" onSubmit={trySignIn}>
		<Block>
			<Input name="name" type="text"/>
			<Input name="surname" type="text"/>
		</Block>
		<Input name="email" type="email"/>
		<Input name="phone" type="phone"/>
		<Input name="avatar" type="fail"/>
		<Select name="age">
			{(() => {
				let i = 6,
					collector = [];

				while (i < 40) {
					collector.push(<Option
						key={i}
					>
						<Typography>
							{i}
						</Typography>
					</Option>)
					i++
				}
				return collector;
			})()}
		</Select>
		<Button type="submit">
			<Typhography>
				Send
			</Typhography>
		</Button>
	</form>
))