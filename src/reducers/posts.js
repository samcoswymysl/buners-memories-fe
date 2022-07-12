import {CREATE_POST, DELETE, FETCH_ALL, LIKE, UPDATE} from "../constants/actionTypes";

export const posts = (state = [], action) => {
  switch (action.type) {
    case DELETE:
      return state.filter((post) => post._id !== action.payload)
    case UPDATE:
    case LIKE:
      return state.map((post) => {
        return post._id === action.payload._id ? action.payload : post
      })
    case FETCH_ALL:
      return action.payload
    case CREATE_POST:
      return [...state, action.payload]
    default:
      return state
  }
}
