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
          <FeaturedArtistTile artistname="A Tribe Called Quest" font="30px"/>
          <FeaturedArtistTile artistname="Young Thug"/>
          <FeaturedArtistTile artistname="Outkast"/>
        </div>
        <a href="#collection" className="button button-3d button-royal page-scroll" style={btnStyle}>REALIZE THE RISE</a>

      </header>
    );
  }
}
