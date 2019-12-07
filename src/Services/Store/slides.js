export default (state = [], action) => {
	switch ( action.type ) {
		case 'SET_SLIDES':
			return [
				...action.payload,
			];
		case 'MERGE_SLIDES':
			return [
				...state,
				...action.payload,
			]
		default:
			return  [...state];
	}
};
