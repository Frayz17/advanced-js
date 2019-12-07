import React, { Component } from "react";
import styled from 'styled-components';
import Image from "components/Image";
import Block from "components/Block";
import { connect } from 'react-redux';

export default connect((state, { index = 0 }) => {
	const {} = (state.slides || [])[index];
	return {
		...(state.slides || [])[index]
	};
})(React.memo(({title = '',
	img = 'https://picsum.photos/id/985/400/400.jpg',
	text = '',
				   index
}) => {
	return title ? <Block>
				<h3>{title}</h3>
				<p>{text}</p>
				<Image src={img}/>
			</Block>: <></>
}));
