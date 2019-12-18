
export default (state = { currentLang: 'ru' }, action) => {
	switch (action.type) {
		case 'UPDATE_LANG':
			return { ...state, currentLang: action.payload };

		default:
			return state;
	}
};
