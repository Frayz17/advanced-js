import { handleChangeSlide } from 'modules/Slider';

export default (state = {
	main: {
		scrollX: 0,
		currentSlide: 0,
		slides: [{
			title: 'First',
			style: {
				backgroundColor: 'red'
			}
		}, {
			title: '1',
			style: {
				backgroundColor: 'blue'
			}
		}, {
			title: 'yellow',
			style: {
				backgroundColor: 'yellow'
			}
		}],
	},
	// welcome: {
	// },
}, { type = '', payload = {} }) => {
	const { sliderName = '', slideIndex = 0 } = payload;

	switch (type) {
		case 'SLIDE_X':
			state[sliderName] = { 
				...handleChangeSlide({ ...state[sliderName] }, slideIndex), 
			};
			return { ...state };

		default:
			return { ...state };
	}
};
