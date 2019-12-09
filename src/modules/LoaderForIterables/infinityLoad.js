import loadData from './loadData';
import { url, query } from './LoaderForIterables.jsx';

export default (isEnable = true) => () => {
  if (
    document.documentElement.offsetHeight > window.innerHeight &&
    window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight &&
    isEnable
  ) {
    loadData(url, query + 1);
  }
};
