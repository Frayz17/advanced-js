import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import loadSlides from './loadSlides.js';
import Slider from 'react-slick';
import Slide from './Slide.jsx';

const CustomSlider = styled(Slider)`
		& button::before {
            color: black;
        }
        & button {
            height: 100%;
            z-index: 10;
			&:first-of-type {
				left:0;
			}
			&:last-of-type {
				right:0;
			}
        }
`,
	settings = {
		dots: false,
		accessibility: true,
		nav: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	};

export default connect((state) => {
	return {
		slidesLength: (state.slides || []).length || 0,
	};
})(React.memo(({
   slidesLength,
}) => {
	React.useEffect(()=> {
		loadSlides();
	}, []);

	return <>
		<link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'/>
		<link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'/>
		<CustomSlider {...settings}>
			{(() => {
				let i = 0,
					collector = [];

				while (i < slidesLength) {
					collector.push(<Slide
						key={i}
						index={i}/>);
					i++;
				}
				return collector;
			})()}
		</CustomSlider>
	</>
}));