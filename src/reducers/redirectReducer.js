export const redirectReducer = (state = false, action) => {
  switch (action.type) {
    case "REDIRECT":
      return action.payload;
    default:
      return state;
  }
};
