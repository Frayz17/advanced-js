import { getStore } from 'Services/Store';

export default async (stateName) => {
  getStore().dispatch({
    type: `${stateName.toUpperCase()}_RESET_STATE`
  });
};
