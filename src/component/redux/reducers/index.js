import { combineReducers } from "redux";
import shipsReducer from "./shipsReducer";
import filtersReducer from "./filtersReducer";
import columnReducer from "./columnReducer";

export default combineReducers({
  ships: shipsReducer,
  filters: filtersReducer,
  column: columnReducer
})