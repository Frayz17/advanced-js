import { getStore } from 'Services/Store';

export default async () => {
	const response = await fetch('http://localhost:4000/posts');
	const data = await response.json();

	getStore().dispatch({
		type: 'SET_POSTS',
		payload: data,
	});
};
