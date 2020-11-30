import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import layoutReducer from "./layoutReducers";
import listReducer from "./listReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  layoutReducer: layoutReducer,
  lists: listReducer
});