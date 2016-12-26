import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from 'react-router';

import routes from "./routes.js";

const index = document.getElementById('index');
ReactDOM.render(
  <Router history={browserHistory}>
    {routes}
  </Router>,
index);
