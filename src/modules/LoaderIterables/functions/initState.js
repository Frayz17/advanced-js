import { getStore } from 'Services/Store';

const initState = (stateName, url, query, urlId) => {
  getStore().dispatch({
    type: `${stateName.toUpperCase()}_INIT_STATE`,
    payload: {
      url,
      query,
      urlId
    }
  });
};

export default initState;
