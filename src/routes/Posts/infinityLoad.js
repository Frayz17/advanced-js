import loadPosts from './loadPosts';
import { getState } from 'Services/Store';

export default () => () => {
  const { page, fetchEnable } = getState().posts;
  // if scrolled to the bottom of the page and fetch data is enabled
  if (
    document.documentElement.offsetHeight > window.innerHeight &&
    window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight &&
    fetchEnable
  ) {
    loadPosts(page + 1);
  }
};
