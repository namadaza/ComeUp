import React from "react";
import { Link } from "react-router";

export default class HipHopCollection extends React.Component {

  render() {
    return (
      <section className="bg-primary collection" id="collection">
        <div className="row">
          <div className="col-lg-8 text-center">
            <h2 className="section-heading">Hip Hop Collection</h2>
            <hr className="light"></hr>
            <div id="row">
              <div className="tile">
                <img src="img/JEFFREY_album.jpg" alt="JEFFREY"></img>
              </div>
              <div className="tile">
                <img src="img/JEFFREY_album.jpg" alt="JEFFREY"></img>
              </div>
              <div className="tile">
                Hover Over Me!
                <img src="img/JEFFREY_album.jpg" alt="JEFFREY"></img>
              </div>
              <div className="tile">
                <img src="img/JEFFREY_album.jpg" alt="JEFFREY"></img>
              </div>
              <div className="tile">
                <img src="img/JEFFREY_album.jpg" alt="JEFFREY"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
