import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todoApp from "./Store/reducers";
import { hydrate, render } from "react-dom";

const store = createStore(todoApp, composeWithDevTools(applyMiddleware()));
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );
  serviceWorker.unregister();
} else {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );
}

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
