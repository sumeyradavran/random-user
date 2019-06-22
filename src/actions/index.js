export const fetchApi = ({ gender, count, nationality }) => async (
  dispatch,
  getState
) => {
  const url = `https://randomuser.me/api/?gender=${gender}&results=${count}&nat=${nationality}`;
  await fetch(url)
    .then(res => res.json())
    .then(res => dispatch(apiResults(res.results)))
    .then(() => dispatch(redirect(getState().redirectStatus)))
    .then(() => dispatch(redirect(getState().redirectStatus)));
};

export const apiResults = result => {
  return {
    type: "FETCH_API_RESULTS",
    payload: result
  };
};

export const selectedProfile = result => {
  return {
    type: "SELECTED_PROFILE",
    payload: result
  };
};

export const redirect = e => {
  if (e) {
    return {
      type: "REDIRECT",
      payload: false
    };
  }
  return {
    type: "REDIRECT",
    payload: true
  };
};
