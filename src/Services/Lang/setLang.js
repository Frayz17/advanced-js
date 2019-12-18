import { getStore } from 'Services/Store';
 
export default (langKey) => {
	getStore().dispatch({
		type: 'UPDATE_LANG',
		payload: langKey,
	});
};
