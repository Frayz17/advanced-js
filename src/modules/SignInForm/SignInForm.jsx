import React from 'react';
// import trySignIn from './trySignIn.js';
// import Input from 'components/Input';
// import Select from 'components/Select';
import Button from 'components/Button';
import Typography from 'components/Typography';

export default React.memo(() => (
	<form method="POST" action="//localhost:4000/auth" onSubmit={trySignIn}>
		// <Block>
		// 	<Input name="name" type="text"/>
		// 	<Input name="surname" type="text"/>
		// </Block>
		// <Input name="email" type="email"/>
		// <Input name="phone" type="phone"/>
		// <Input name="avatar" type="file"/>
		// <Select name="age" />
		// <Button type="submit">
		// 	<Typography>
		// 		Send
		// 	</Typography>
		// </Button>
	</form>
));