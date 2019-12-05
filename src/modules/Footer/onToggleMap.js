import { getStore } from 'Services/Store';

export default () => {
  getStore().dispatch({
    type: 'TOGGLE_IS_MAP_OPEN'
  });
};
