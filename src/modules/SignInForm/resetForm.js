import { getStore } from 'Services/Store';

export default async (e) => {
	e.preventDefault();

	getStore().dispatch({
		type: 'SIGN_IN_INIT'
	});
};
