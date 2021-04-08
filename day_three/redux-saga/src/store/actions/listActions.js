export const ADD_ITEM = "ADD_ITEM";

export function addItem(newItem){
  return {
    type: ADD_ITEM,
    payload: newItem
  }
}