import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from 'modules/Menu';
import Home from 'routes/Home';
import Posts from 'routes/Posts';
import SignIn from 'routes/SignIn';

export default React.memo(() => {
	return <>
		{/*<Menu />*/}
		<Switch>
			<Route path="/posts">
				<Posts />
			</Route>
			<Route path="/sign-in">
				<SignIn />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	</>
});
