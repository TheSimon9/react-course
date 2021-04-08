import {createStore} from "redux";
import reducer from "./reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";


// function to compose store enhancers with redux dev tools
const composeEnhancers = composeWithDevTools({});

// The second parameter has been copied from redux docs. It is going to manage devTools.
const store = createStore(
    reducer,
    composeEnhancers()
);


export default store;