import React from 'react';
import { Switch } from 'react-router-dom';
import Route from 'modules/Route';
import Menu from 'modules/Menu';
import Home from 'routes/Home';
import Posts from 'routes/Posts';
import SignIn from 'routes/SignIn';

export default React.memo(() => {
	return <>
		<Menu />
		<Switch>
			<Route 
				title="Posts" 
				description="!!description1" 
				path="/posts">
				<Posts />
			</Route>
			<Route 
				title="Sign in" 
				path="/sign-in"
				description="!!description10000000">
				<SignIn />
			</Route>
			<Route 
				title="Home" 
				path="/"
				description=">>>>>>>>>>>>>>>>">
				<Home />
			</Route>
		</Switch>
	</>
});
