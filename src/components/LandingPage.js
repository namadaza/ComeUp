import React from "react";
import { Link } from "react-router";

import FeaturedArtists from "./FeaturedArtists";
import Collection from "./Collection";

export default class LandingPage extends React.Component {

  render() {
    return (
      <div>
        <FeaturedArtists />
        <Collection title="Hip Hop Collection"/>
        <Collection title="R&B Collection"/>
      </div>
    );
  }
}
