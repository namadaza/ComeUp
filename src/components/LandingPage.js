import React from "react";
import { Link } from "react-router";

import FeaturedArtists from "./FeaturedArtists";
import HipHopCollection from "./HipHopCollection";
import RBCollection from "./RBCollection";
import ArtistProfile from "./ArtistProfile";

export default class LandingPage extends React.Component {

  render() {
    return (
      <div>
        <FeaturedArtists />
        <HipHopCollection />
        <RBCollection />
        <ArtistProfile />
      </div>
    );
  }
}
