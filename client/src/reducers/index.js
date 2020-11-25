import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import layoutReducer from "./layoutReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  layoutReducer: layoutReducer
});