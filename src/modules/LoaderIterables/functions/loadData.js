import { getStore, getState } from 'Services/Store';

export default async (stateName, url = '', query = '', urlId = '') => {
  const { isLoadEnable } = getState()[stateName];
  const stateNameUpCase = stateName.toUpperCase();

  if (isLoadEnable) {
    try {
      const response = await fetch(url + query + urlId);

      if (response.status === 200) {
        const data = await response.json();

        getStore().dispatch({
          type: `${stateNameUpCase}_MERGE_DATA`,
          payload: {
            url,
            query,
            urlId,
            data
          }
        });
      } else {
        getStore().dispatch({
          type: `${stateNameUpCase}_SET_LOAD_DISABLE`
        });
      }
    } catch {
      getStore().dispatch({
        type: `${stateNameUpCase}_SET_LOAD_DISABLE`
      });
    }
  }
};
