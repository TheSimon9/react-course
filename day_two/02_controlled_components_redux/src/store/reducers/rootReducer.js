import { combineReducers } from "redux";
import listReducer from "./listReducer";

//combineReducers is an utility function given by redux. It provides a standard implementation of a root reducer.
export default combineReducers({
  listReducer
});