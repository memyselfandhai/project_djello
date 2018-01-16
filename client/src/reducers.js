import { combineReducers } from "redux";
import * as Actions from "./actions";

const initialState = {
  boards: [],
  isFetching: false,
  error: null
};

export function boards(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_RESOURCE_SUCCESS:
      return {
        ...state,
        boards: action.data,
        isFetching: false
      };
    case Actions.GET_RESOURCE_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_RESOURCE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case Actions.DELETE_RESOURCE_SUCCESS:
      return {
        ...state,
        boards: action.data,
        isFetching: false
      };
    default:
      return state;
  }
}

export const djello = combineReducers({
  boards
});
