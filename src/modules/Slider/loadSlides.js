import {getStore} from '../../Services/Store';

export default async (page  = 1) => {
	const response = await fetch('http://127.0.0.1:4000/main_slider');
	const data = await response.json();

	getStore().dispatch({
		type: 'SET_SLIDES',
		payload: data,
	})
};
