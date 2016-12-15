import React from "react";
import { Route } from "react-router";

import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";

export default (
  <Route component={Layout}>
    <Route path="/" component={LandingPage} />
  </Route>
)
