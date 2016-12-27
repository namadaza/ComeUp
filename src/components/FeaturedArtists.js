import React from "react";
import { Link } from "react-router";

import FeaturedArtistTile from "./FeaturedArtistTile";


export default class FeaturedArtists extends React.Component {

  render() {
    var btnStyle = {
      width: '50%',
      minWidth: '200px',
      fontFamily: 'Oswald',
      fontWeight: '500'
    }
    return (
      <header>
        <div className="header-content">
          <FeaturedArtistTile artistname="youngthug" position="left"/>
          <FeaturedArtistTile artistname="youngthug" position="mid"/>
          <FeaturedArtistTile artistname="youngthug" position="right"/>
        </div>
        <a href="#hiphopcollection" className="button button-3d button-royal page-scroll" style={btnStyle}>REALIZE THE RISE</a>

      </header>
    );
  }
}
