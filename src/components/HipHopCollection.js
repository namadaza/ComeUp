import React from "react";
import { Link } from "react-router";

export default class HipHopCollection extends React.Component {

  render() {
    return (
      <section className="bg-primary collection" id="hiphopcollection">
        <h2 className="section-heading">Hip Hop Collection</h2>
        <div className="row single-item">
          <div className="tile">
            <img src="img/brocolli.jpg"></img>
          </div>
          <div className="tile">
            <img src="img/dasefx.jpg"></img>
          </div>
          <div className="tile">
            <img src="img/food.jpg"></img>
          </div>
          <div className="tile">
            <img src="img/getoboys.jpg"></img>
          </div>
          <div className="tile">
            <img src="img/gucci.jpg"></img>
          </div>
          <div className="tile">
            <img src="img/octagon.jpg"></img>
          </div>
          <div className="tile">
            <img src="img/shabbaranks.jpg"></img>
          </div>
          <div className="tile">
            <img src="img/JEFFREY_album.jpg"></img>
          </div>
        </div>
      </section>
    );
  }
}
