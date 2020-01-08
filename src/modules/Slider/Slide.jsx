import React from 'react';
import Image from 'components/Image';
import { BlockFlex } from 'components/Block';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Slide = styled(BlockFlex)`
	flex-direction: column;
	align-items: center;
	min-height: 50vh;
	& img {
            opacity: 0.5;
            position: absolute;
            top: 0;
            Left: 0;
            right: 0;
            bottom: 0;
            height: 100%;
            width: 100%;
            z-index: -1;
            object-fit: cover;
            transition: .4s all linear;	
    }
	&:hover {
		& img {
			opacity: .8;	
		}
		& p {
		background-color: rgba(255,255,255,.3)
		}
	}
	& h3 { 
           text-align: center;
           margin: 0;
           padding: 20px 10px;
    }
	& p {
		 transition: .4s all linear;	
		 overflow: hidden;
		 text-align: justify;
		 padding: 0 15px;
		 margin: 0;
		 max-height: 40vh;
		 overflow: hidden;
	}
`

export default connect((state, { index = 0 }) => {
	return {
		...(state.slides || [])[index]
	};
})(React.memo(({
				   title = '',
				   img = 'https://picsum.photos/id/985/400/400.jpg',
				   text = '',
				   index
			   }) => {
	return	img ?
		<Slide>
			<h3>{title}</h3>
			<p>{text}</p>
			<Image src={img}/>
		</Slide> : <React.Fragment />
}));