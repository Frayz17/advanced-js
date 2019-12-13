export default (
  state = {
    url: '',
    query: '',
    data: [],
    isLoadEnable: true
  },
  { type = '', payload = {} }
) => {
  switch (type) {
    case 'INIT_LOADER_ITERABLES':
      return {
        url: payload.url,
        query: payload.query,
        data: payload.data,
        isLoadEnable: payload.isLoadEnable
      };

    case 'MERGE_LOADER_ITERABLES_DATA':
      return {
        ...state,
        url: payload.url,
        query: payload.query,
        data: [...state.data, ...payload.data],
        isLoadEnable: true
      };

    case 'RESET_LOADER_ITERABLES':
      return {
        url: '',
        query: '',
        data: [],
        isLoadEnable: true
      };

    case 'SET_LOADER_ITERABLES_LOAD_ENABLE':
      return {
        ...state,
        isLoadEnable: true
      };

    case 'SET_LOADER_ITERABLES_LOAD_DISABLE':
      return {
        ...state,
        isLoadEnable: false
      };

    default:
      return { ...state };
  }
};
