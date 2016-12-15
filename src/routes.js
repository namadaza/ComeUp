import React from "react";
import { Route } from "react-router";

import Layout from "./components/Layout";
import FeaturedArtists from "./components/FeaturedArtists";

export default (
  <Route component={Layout}>
    <Route path="/" component={FeaturedArtists} />
  </Route>
)
