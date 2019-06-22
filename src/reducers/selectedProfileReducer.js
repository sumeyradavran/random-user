export const selectedProfileReducer = (state = null, action) => {
  switch (action.type) {
    case "SELECTED_PROFILE":
      return action.payload;
    default:
      return state;
  }
};
