import loadData from './loadData';
import { getState } from 'Services/Store';

export default () => () => {
  const { url, query, isLoadEnable } = getState().loaderIterables;

  if (
    document.documentElement.offsetHeight > window.innerHeight &&
    window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight &&
    isLoadEnable
  ) {
    loadData(url, query + 1);
  }
};
