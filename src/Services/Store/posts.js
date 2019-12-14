export default (
  state = {
    data: [],
    page: 1,
    fetchEnable: true
  },
  action
) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        data: [...action.payload.data],
        page: action.payload.page,
        fetchEnable: true
      };
    case 'MERGE_POSTS_DATA':
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        page: action.payload.page
      };
    case 'RESET_POSTS':
      return {
        data: [],
        page: 1,
        fetchEnable: true
      };
    case 'FETCH_POSTS_DATA_FAILED':
      return {
        ...state,
        fetchEnable: false
      };
    case 'ENABLE_TO_FETCH_DATA_AFTER_FAIL':
      return {
        ...state,
        fetchEnable: true
      };
    default:
      return { ...state };
  }
};
