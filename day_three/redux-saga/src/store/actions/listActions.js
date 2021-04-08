export const ADD_ITEM = "ADD_ITEM";

export function addItem(newItem){
  return {
    type: ADD_ITEM,
    payload: newItem
  }
}

export const GET_LIST_START = "GET_LIST_START";

export function getListStart(){
  return {
    type: GET_LIST_START,
  }
}

export const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";

export function getListSuccess(list){
  return {
    type: GET_LIST_SUCCESS,
    payload: list
  }
}

export const POST_ITEM_START = "POST_ITEM_START";

export function postItemStart(newItem){
  return {
    type: POST_ITEM_START,
    payload: newItem
  }
}

export const POST_ITEM_SUCCESS = "POST_ITEM_SUCCESS";

export function postItemSuccess(){
  return {
    type: POST_ITEM_SUCCESS,
  }
}
