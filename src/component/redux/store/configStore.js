import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import indexReducer from "../reducers";

// create store and export it
const configStore = () => (
  createStore(
    indexReducer,
    applyMiddleware(thunk)
  )
)

export default configStore;