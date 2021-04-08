import {ADD_ITEM} from "../actions/listActions";

const initialState = {
  list: []
};

export default function listReducer(state= initialState, action){
  const newState = {
    ...state
  }; //we create a copy of the current state, in order to follow immutability principles.

  switch (action.type) {
    case ADD_ITEM:
      const value = action.payload;
      newState.list = [...newState.list, value];
      return newState
    default:
      return newState;
  }
}