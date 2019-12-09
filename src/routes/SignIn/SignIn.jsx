import React from 'react';
import { TypographyHeader } from 'components/Typography';
import SignInForm from 'modules/SignInForm';

export default React.memo(() => (
	<>
		<TypographyHeader>SignIn page</TypographyHeader>
		<SignInForm />
	</>
));
