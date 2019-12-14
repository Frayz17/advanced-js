
export default (state = { 
	name: 'Test Name', 
	authFlag: undefined, 
}, action) => {
	switch (action.type) {
		case 'SIGN_IN_SUCCESS':
			return {
				...state,
				authFlag: true,
			};

		case 'SIGN_IN_FAILURE':
			return {
				...state,
				authFlag: false,
			};

		case 'SIGN_IN_INIT':
			return {
				...state,
				authFlag: undefined,
			};

		case 'CHANGE_NAME':
			return (state.name = action.payload);

		default:
			return { ...state };
	}
};
