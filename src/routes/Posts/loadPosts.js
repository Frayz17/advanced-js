import { getStore } from 'Services/Store';

export default async (page = 1) => {
  try {
    const response = await fetch(`http://127.0.0.1:4000/posts/${page}`);

    if (response.status === 200) {
      const data = await response.json();

      getStore().dispatch({
        type: 'MERGE_POSTS_DATA',
        payload: {
          data,
          page
        }
      });
    } else {
      getStore().dispatch({
        type: 'FETCH_POSTS_DATA_FAILED'
      });
    }
  } catch {
    getStore().dispatch({
      type: 'FETCH_POSTS_DATA_FAILED'
    });
  }
};
