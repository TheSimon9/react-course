import {createStore, compose, applyMiddleware} from "redux";
import reducer from "./reducers/rootReducer";
import createSagaMiddleware from "redux-saga"
import {composeWithDevTools} from "redux-devtools-extension";
import {getListWatcher} from "../sagas/getListSaga";

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

// function to compose store enhancers with redux dev tools
const composeEnhancers = composeWithDevTools({});


// The second parameter has been copied from redux docs. It is going to manage devTools.
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

// run watcher
sagaMiddleware.run(getListWatcher);

export default store;