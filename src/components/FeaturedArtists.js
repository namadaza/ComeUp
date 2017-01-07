import React from "react";
import { Link } from "react-router";

import FeaturedArtistTile from "./FeaturedArtistTile";


export default class FeaturedArtists extends React.Component {

  render() {
    var btnStyle = {
      width: '50%',
      minWidth: '200px',
      maxWidth: '1500px',
      fontFamily: 'Oswald',
      fontWeight: '500'
    }
    return (
      <header>
        <div className="header-content" id="home">
          <FeaturedArtistTile artistname="Anderson Paak"/>
          <FeaturedArtistTile artistname="Young Thug"/>
          <FeaturedArtistTile artistname="D.R.A.M"/>
        </div>
        <a href="#collection" className="button button-3d button-royal page-scroll" style={btnStyle}>REALIZE THE RISE</a>

      </header>
    );
  }
}
