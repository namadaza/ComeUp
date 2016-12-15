import createBrowserHistory from 'history/createBrowserHistory';
import React from "react";
import ReactDOM from "react-dom";
import Router from "react-router";

import routes from "./routes.js";
let history = createBrowserHistory();

const index = document.getElementById('index');
ReactDOM.render(
  <Router history={history}>
    {routes}
  </Router>,
index)
