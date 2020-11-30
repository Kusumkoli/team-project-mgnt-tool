import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import layoutReducer from "./layoutReducers";
import listReducer from "./listReducers";
import cardsReducer from "./cardsReducer";
import boardsReducer from "./boardsReducer";
import boardOrderReducer from "./boardOrderReducer";
import activeBoardReducer from "./activeBoardReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  layoutReducer: layoutReducer,
  lists: listReducer,
  cards: cardsReducer,
  boards: boardsReducer,
  boardOrder: boardOrderReducer,
  activeBoard: activeBoardReducer
});