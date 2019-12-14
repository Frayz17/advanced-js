import { getStore } from 'Services/Store';



export default async (e) => {
	e.preventDefault();

	const collector = {};
	const { 
		action,
		elements,
		method,
	} = e.target;
	[ ...elements ].forEach((item) => {
		if ((item.nodeName === 'BUTTON' || item.nodeName === 'SELECT') &&
			item.name) {
			collector[item.name] = item.value || '';
		}
	});
	const path = action + ((Math.floor(Math.random() * (1 - 0 + 1)) + 0) || '0');
	const r = await fetch(path, {
		method,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(collector),
	});

	getStore().dispatch({
		type: r.status === 200 ?
			'SIGN_IN_SUCCESS' :
			'SIGN_IN_FAILURE'
	});
};
