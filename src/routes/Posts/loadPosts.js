import { getStore } from 'Services/Store';

export default async (page = 1) => {
  try {
    const response = await fetch(`http://127.0.0.1:4000/posts/${page}`);

    if (response.ok) {
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
      console.log('faild to get posts, response status: ', response.status);
    }
  } catch (e) {
    console.log(e);
    getStore().dispatch({
      type: 'FETCH_POSTS_DATA_FAILED'
    });

    // enable to fetch again after 10 seconds
    let cooldown = null;
    clearTimeout(cooldown);
    cooldown = setTimeout(() => {
      getStore().dispatch({
        type: 'ENABLE_TO_FETCH_DATA_AFTER_FAIL'
      });
    }, 10000);
  }
};
