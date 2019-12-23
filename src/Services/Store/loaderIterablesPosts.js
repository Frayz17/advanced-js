export default (
  state = {
    url: '',
    query: '',
    urlId: '',
    data: [],
    isLoadEnable: true
  },
  { type = '', payload = {} }
) => {
  switch (type) {
    case 'LOADERITERABLESPOSTS_INIT_STATE':
      return {
        url: payload.url,
        query: payload.query,
        urlId: payload.urlId,
        data: [],
        isLoadEnable: true
      };

    case 'LOADERITERABLESPOSTS_MERGE_DATA':
      return {
        ...state,
        url: payload.url,
        query: payload.query,
        urlId: payload.urlId,
        data: [...state.data, ...payload.data],
        isLoadEnable: true
      };

    case 'LOADERITERABLESPOSTS_RESET_STATE':
      return {
        url: '',
        query: '',
        urlId: '',
        data: [],
        isLoadEnable: true
      };

    case 'LOADERITERABLESPOSTS_SET_LOAD_ENABLE':
      return {
        ...state,
        isLoadEnable: true
      };

    case 'LOADERITERABLESPOSTS_SET_LOAD_DISABLE':
      return {
        ...state,
        isLoadEnable: false
      };

    default:
      return { ...state };
  }
};
