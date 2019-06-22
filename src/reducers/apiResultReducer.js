export const apiResultReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_API_RESULTS":
      return action.payload;
    default:
      return state;
  }
};
