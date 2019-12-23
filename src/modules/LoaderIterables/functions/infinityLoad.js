import loadData from './loadData';
import { getState } from 'Services/Store';

export default (stateName) => () => {
  const { url, query, urlId, isLoadEnable } = getState()[stateName];

  if (
    document.documentElement.offsetHeight > window.innerHeight &&
    window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight &&
    isLoadEnable
  ) {
    loadData(stateName, url, query, urlId + 1);
  }
};
