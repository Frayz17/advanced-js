export default (
  state = {
    url: '',
    query: '',
    data: [],
    isLoadEnable: true
  },
  { type = '' }
) => {
  switch (type) {
    case 'INIT_LOADER':
      return {
        url: payload.url,
        query: payload.query,
        data: payload.data,
        isLoadEnable: payload.isLoadEnable
      };
    case 'MERGE_DATA':
      return {
        ...state,
        url: payload.url,
        query: payload.query,
        data: [...state.data, payload.data]
      };
    case 'RESET_LOADER':
      return {
        url: '',
        query: '',
        data: [],
        isLoadEnable: true
      };
    case 'SET_LOAD_ENABLE':
      return {
        isLoadEnable: true
      };
    case 'SET_LOAD_DISABLE':
      return {
        isLoadEnable: false
      };
    default:
      return { ...state };
  }
};
