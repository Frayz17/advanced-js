import React from 'react';
import { connect } from 'react-redux';
import { getStore } from 'Services/Store';
import styled from 'styled-components';
import Block from 'components/Block';
import Button from 'components/Button';

const RootWrapper = styled(Block)`
	overflow: hidden;
	width: 300px;
	height: 140px;
	border: 1px solid;
`;
const ContentWrapper = styled(Block)`
	overflow: hidden;
	height: 100%;
	width: ${({ slidesCount }) => `calc(100% * ${slidesCount})` };
	& > div {
		float: left;
		width: ${({ slideWidth = 100 }) => slideWidth +'%'};
		height: 100%;
	}
`;

class Slider extends React.Component {
	static defaultProps = {
		defaultSlide: 0,
		name: ''
	};

	slideTo = (slideIndex = this.props.defaultSlide) => (e) => {
		getStore().dispatch({
			type: 'SLIDE_X',
			payload: {
				sliderName: this.props.name, 
				slideIndex,
			}
		});
	};

	render = () => {
		const { slides = [], currentSlide = 0, scrollX = 0 } = this.props;
		const slidesCount = slides.length || 1;
		const slideWidth = +(100 / slidesCount).toFixed(2);

		console.log('slides', slides)
		return <>
			<RootWrapper>
				<ContentWrapper 
					slideWidth={slideWidth}
					slidesCount={slidesCount}
					style={{
						transform: `translate(-${scrollX}%,0px)`,
						transition: 'ease .2s all'
					}}>
				{slides.map(({ 
					style = {}, 
					title = 'No name' 
				}, i) => {
					return <Block key={i} style={style}>
						{title}
					</Block>
				})}
				</ContentWrapper>
			</RootWrapper>
			<Button onClick={this.slideTo(currentSlide - 1)}>
				prev
			</Button>
			<Button onClick={this.slideTo(currentSlide + 1)}>
				next
			</Button>
		</>;
	};
};
export default connect((state, { name = '' }) => {
	return {
		...state.sliders[name],
	};
})(Slider);
