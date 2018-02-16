import { combineReducers } from "redux";
import shipsReducer from "./shipsReducer";

export default combineReducers({
  ships: shipsReducer
})