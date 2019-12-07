import React from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';
import SimpleSlider from 'modules/Slider';
import loadSlides from "./loadSlides.js";
import styled from "styled-components";

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
        }
        & div {
            position: relative;
        }
        & h3 { 
           text-align: center;
        }
        & p{
            height: 300px;
            overflow: hidden;
            text-align: justify;
            padding: 0 15px;
        }
`;



export default connect((state) => {
	const settings = {
		dots: false,
		accessibility: true,
		nav: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};
	return {
		settings,
		slidesLength: (state.slides || []).length || 0,
	};
})(React.memo(({
				   settings,
				   slidesLength,
			   }) => {
	React.useEffect(()=> {
		loadSlides();
	}, []);
	return <>
		<b>Home page</b>
		{console.log(slidesLength)}
		<CustomSlider {...settings}>
			{(() => {
				let i = 0,
					collector = [];

				while (i < slidesLength) {
					collector.push(<SimpleSlider
						key={i}
						index={i}/>);
					i++;
				}
				return collector;
			})()}
		</CustomSlider>
	</>
}));