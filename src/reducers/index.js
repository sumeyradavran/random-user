import { combineReducers } from "redux";
import { apiResultReducer } from "./apiResultReducer";
import { redirectReducer } from "./redirectReducer";
import { selectedProfileReducer } from "./selectedProfileReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  fetchedResults: apiResultReducer,
  form: formReducer,
  selectedProfile: selectedProfileReducer,
  redirectStatus: redirectReducer
});
