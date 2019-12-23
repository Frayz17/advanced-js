import { newStore, getStore, getState } from './Store.js';

import posts from './posts';
import nav from './nav';
import menu from './menu';
import map from './map';
import loaderIterablesUserRecord from './loaderIterablesUserRecord';
import loaderIterablesPosts from './loaderIterablesPosts';
import StoreProvider from './StoreProvider';

export {
  newStore,
  getStore,
  getState,
  posts,
  StoreProvider,
  nav,
  menu,
  map,
  loaderIterablesPosts,
  loaderIterablesUserRecord
};
