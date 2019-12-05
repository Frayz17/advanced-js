export default (
  state = {
    isMapOpenFlag: false
  },
  action
) => {
  switch (action.type) {
    case 'TOGGLE_IS_MAP_OPEN':
      return {
        isMapOpenFlag: !state.isMapOpenFlag
      };
    default:
      return { ...state };
  }
};
