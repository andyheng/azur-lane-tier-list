import { combineReducers } from "redux";
import shipsReducer from "./shipsReducer";
import filtersReducer from "./filtersReducer";
import columnReducer from "./columnReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  ships: shipsReducer,
  filters: filtersReducer,
  column: columnReducer,
  modal: modalReducer
})