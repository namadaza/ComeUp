import React from "react";
import { Link } from "react-router";

import FeaturedArtistTile from "./FeaturedArtistTile";


export default class FeaturedArtists extends React.Component {

  render() {
    return (
      <header>
        <div className="header-content">
          <FeaturedArtistTile />
          <FeaturedArtistTile />
          <FeaturedArtistTile />
        </div>
        <a href="#hiphopcollection" className="btn btn-primary btn-long page-scroll" id="realizerisebtn">REALIZE THE RISE</a>
      </header>
    );
  }
}
