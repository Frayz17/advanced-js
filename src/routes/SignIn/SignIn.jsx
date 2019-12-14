import React from 'react';
import { TypographyHeader } from 'components/Typography';
import SignInForm from 'modules/SignInForm';

export default class SignIn extends React.Component {
	render = () => {
		return <>
		<TypographyHeader>SignIn page</TypographyHeader>
		<SignInForm />
		</>
	};
};
