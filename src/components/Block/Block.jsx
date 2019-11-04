import React from 'react';

export default class Block extends React.Component {
	state = {
		displayFlag: false,
	};

	swithDisplay = () => this.setState({ 
		displayFlag: !Boolean(this.state.displayFlag) 
	}, () => {
		this.props.getCurrentState(this.state.displayFlag);
	});

	render = () => {
		const { children, getCurrentState = () => {}, ...props } = this.props;
		
		return <div { ...props } onClick={this.swithDisplay}>
			{children}
		</div>;
	};
};
