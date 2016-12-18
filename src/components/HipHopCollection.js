import React from "react";
import { Link } from "react-router";

export default class HipHopCollection extends React.Component {

  render() {
    return (
      <section className="bg-primary" id="hiphopcollection">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 text-center">
              <h2 className="section-heading">Hip Hop Collection</h2>
              <hr className="light"></hr>
              <div id="row">
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile">Hover Me</div>
                <div className="tile"></div>
                <div className="tile"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
