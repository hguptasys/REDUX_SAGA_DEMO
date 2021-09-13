import { combineReducers } from "redux";
import data from "./reducer";

const rootReducer = combineReducers({
  data_All: data,
 
});

export default rootReducer;