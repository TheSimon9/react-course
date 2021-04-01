import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers/rootReducer";


//The second parameter has been copied from redux docs. It is going to manage devTools.
const store = createStore(
  reducer,
  typeof window === "object" &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

export default store;