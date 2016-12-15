import React from "react";
import { Link } from "react-router";

export default class FeaturedArtists extends React.Component {

  render() {
    return (
      <header className="bg-primary">
        <div className="header-content">
          <div className="header-content-inner">
            <h1 id="homeHeading">Featured Go Here</h1>
            <hr></hr>
            <p>Scaffolding fools!</p>
            <a href="#hiphopcollection" className="btn btn-primary btn-long page-scroll">REALIZE THE RISE</a>
          </div>
        </div>
      </header>
    );
  }
}
