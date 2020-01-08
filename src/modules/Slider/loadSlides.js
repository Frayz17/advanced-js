import {getStore} from '../../Services/Store';

export default async (page, jsonAdress) => {
	const response = await fetch(jsonAdress);
	const data = await response.json();
	getStore().dispatch({
		type: 'SET_SLIDES',
		payload: data,
	})
};
