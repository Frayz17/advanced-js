import React from 'react';
import Block from 'components/Block';

class App extends React.Component {
	render = () => {
		return <>
			<Block 
				id="header__wrapper"
				className="test"
				style={{
					textAlign: 'center',
					color: 'red',	
				}}
				getCurrentState={(value) => {
					console.log('App', value)
				}}>
				<h1>Header</h1>
			</Block>
		</>;
	};
};
export default App;
