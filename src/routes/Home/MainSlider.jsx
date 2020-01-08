import React from 'react';
import Slider from 'modules/Slider';


const settings = {
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
}


export default React.memo(() => {
	return <>
		<Slider jsonAdress={'http://127.0.0.1:4000/main_slider'} {...settings} page={1} />
	</>
});
