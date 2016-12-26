import React from "react";
import { Link } from "react-router";

import FeaturedArtistTile from "./FeaturedArtistTile";


export default class FeaturedArtists extends React.Component {

  render() {
    var btnStyle = {
      width: '50%',
      fontFamily: 'Oswald',
      fontWeight: '500'
    }
    return (
      <header>
        <div className="header-content">
          <FeaturedArtistTile artistname="youngthug"/>
          <FeaturedArtistTile artistname="youngthug"/>
          <FeaturedArtistTile artistname="youngthug"/>
        </div>
        <a href="#hiphopcollection" className="button button-3d button-royal page-scroll" style={btnStyle}>REALIZE THE RISE</a>

      </header>
    );
  }
}
