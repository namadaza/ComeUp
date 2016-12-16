import React from "react";
import { Link } from "react-router";

export default class FeaturedArtistTile extends React.Component {

  render() {
    const tileStyle = {

    }
    return (
      <div className="featuredartisttile">
        <h1>Young Thug</h1>
        <img src="img/JEFFREY_album.jpg" alt="JEFFREY"></img>
        <h3>JEFFREY</h3>
        <h5>
          <i className="fa fa-play-circle-o fa-fw fa-lg" aria-hidden="false"></i>
          &nbsp;
          Harambe
        </h5>
        <h5>
          <i className="fa fa-play-circle-o fa-fw fa-lg" aria-hidden="false"></i>
          &nbsp;
          Floyd Mayweather
        </h5>
        <a href="#hiphopcollection" className="btn btn-primary btn-skinny page-scroll">
          <i className="fa fa-angle-up" aria-hidden="true"></i>
        </a>
      </div>
    );
  }
}
