import { getStore, getState } from 'Services/Store';

export default async (url = '', query = '') => {
  const { isLoadEnable } = getState().loaderIterables;

  if (isLoadEnable) {
    try {
      const response = await fetch(url + query);

      if (response.status === 200) {
        const data = await response.json();

        getStore().dispatch({
          type: 'MERGE_LOADER_ITERABLES_DATA',
          payload: {
            url,
            query,
            data
          }
        });
      } else {
        console.log(
          'error from status response, failed to get data, response status: ',
          response.status
        );

        getStore().dispatch({
          type: 'SET_LOADER_ITERABLES_LOAD_DISABLE'
        });
      }
    } catch (e) {
      console.log('error from catch', e);

      getStore().dispatch({
        type: 'SET_LOADER_ITERABLES_LOAD_DISABLE'
      });
    }
  }
};
