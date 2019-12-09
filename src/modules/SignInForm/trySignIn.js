import { getStore } from 'Services/Store';

export default async (e) => {
	e.preventDefault();

	console.log('>>>>>>>>>>>>>>>>')

	// const { 
	// 	action,
	// 	elements,
	// 	method,
	// } = e.target;
	// const clearBody = [ ...elements ].filter((item) => (
	// 	item.nodeName === 'BUTTON' || item.nodeName === 'SELECT'
	// ));
	// const r = await fetch(action, {
	// 	method,
	// 	headers: {
	// 		'Accept': 'application/json',
	// 		'Content-Type': 'application/json'
	// 	},
	// 	body: JSON.stringify(clearBody),
	// });

	// getStore().dispatch({
	// 	type: r.status === 200 ?
	// 		'SIGN_IN_SUCCESS' :
	// 		'SIGN_IN_FAILURE'
	// });
};
