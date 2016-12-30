import React from "react";
import { Link } from "react-router";

import FeaturedArtists from "./FeaturedArtists";
import Collection from "./Collection";

export default class LandingPage extends React.Component {

  render() {
    return (
      <div>
        <FeaturedArtists />
        <Collection genre="hiphop" title="Hip Hop Collection"/>
        <Collection genre="r&b" title="R&B Collection"/>
      </div>
    );
  }
}
