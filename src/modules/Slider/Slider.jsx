import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import loadSlides from './loadSlides.js';
import Slider from 'react-slick';
import Slide from './Slide.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
	};

export default connect((state) => {
	return {
		slidesLength: (state.slides || []).length || 0,
	};
})(React.memo(({
				   slidesLength,
				 jsonAdress,
	page,
	...props
			   }, ) => {
		React.useEffect(()=> {
		loadSlides(page, jsonAdress);
	}, [jsonAdress, page]);

	return <>
		<CustomSlider { ...settings} {...props }>
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