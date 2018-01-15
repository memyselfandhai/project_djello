// -------------------
// libraries & packages
// -------------------
import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import logger from "redux-logger";

// -------------------
// local files
// -------------------
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import { djello } from "./reducers";

// -------------------
// the rest
// -------------------

let store = createStore(djello, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
