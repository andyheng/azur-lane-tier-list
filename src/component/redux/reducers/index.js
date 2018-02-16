import { combineReducers } from "redux";
import shipsReducer from "./shipsReducer";
import filtersReducer from "./filtersReducer";

export default combineReducers({
  ships: shipsReducer,
  filters: filtersReducer
})