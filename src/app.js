// React
import React from "react";
import ReactDOM from "react-dom";
import ALTierApp from "./component/ALTierApp";
// Style
import "normalize.css/normalize.css";
import 'react-perfect-scrollbar/dist/css/styles.css';
import "./style/style.scss";
// Redux
import { Provider } from "react-redux";
import configStore from "./component/redux/store/configStore";

// initialize redux store
const store = configStore();
// provide to app
const provideReduxStoreToApp = (
  <Provider store={store}>
    <ALTierApp />
  </Provider>
)

ReactDOM.render(
  provideReduxStoreToApp,
  document.querySelector("#container")
)