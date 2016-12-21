import React from "react";
import { Link } from "react-router";

export default class HipHopCollection extends React.Component {

  render() {
    var settings = {
      dots: true,
    };
    return (
      <section className="bg-primary collection" id="collection">
        <h2 className="section-heading">Hip Hop Collection</h2>
        <div className="row single-item">
          <div className="tile">
            <img src="img/brocolli.jpg" alt="JEFFREY"></img>
          </div>
          <div className="tile">
            <img src="img/dasefx.jpg" alt="JEFFREY"></img>
          </div>
          <div className="tile">
            <img src="img/food.jpg" alt="JEFFREY"></img>
          </div>
          <div className="tile">
            <img src="img/getoboys.jpg" alt="JEFFREY"></img>
          </div>
          <div className="tile">
            <img src="img/gucci.jpg" alt="JEFFREY"></img>
          </div>
          <div className="tile">
            <img src="img/octagon.jpg" alt="JEFFREY"></img>
          </div>
          <div className="tile">
            <img src="img/shabbaranks.jpg" alt="JEFFREY"></img>
          </div>
          <div className="tile">
            <img src="img/JEFFREY_album.jpg" alt="JEFFREY"></img>
          </div>
        </div>
      </section>
    );
  }
}
