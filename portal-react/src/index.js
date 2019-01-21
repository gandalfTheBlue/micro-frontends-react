import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import * as singleSpa from "single-spa";
import { GlobalEventDistributor } from "./globalEventDistributor";
import { loadApp } from "./helper/mfeHelper";
import App from "./components/app";
import store, { history } from "./store";

const gloEveDis = new GlobalEventDistributor();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

async function init() {
  const loadingPromises = [];

  // app1: The URL "/app1/..." is being redirected to "http://localhost:3001/..." this is done by the webpack proxy (webpack.config.js)
  loadingPromises.push(
    loadApp(
      "app1",
      "/app1",
      "/app1/static/js/singleSpaEntry.js",
      "/app1/static/js/store.js",
      gloEveDis
    )
  );

  // app1: The URL "/app2/..." is being redirected to "http://localhost:3002/..." this is done by the webpack proxy (webpack.config.js)
  loadingPromises.push(
    loadApp(
      "app2",
      "/app2",
      "/app2/static/js/singleSpaEntry.js",
      "/app2/static/js/store.js",
      gloEveDis
    )
  );

  // wait until all stores are loaded and all apps are registered with singleSpa
  await Promise.all(loadingPromises);

  singleSpa.start();
}

init();
