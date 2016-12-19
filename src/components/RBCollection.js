import React from "react";
import { Link } from "react-router";

export default class RBCollection extends React.Component {

  render() {
    return (
      <section className="bg-primary collection" id="collection">
        <div className="row">
          <div className="col-lg-8 text-center">
            <h2 className="section-heading">R&B Collection</h2>
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
      </section>
    );
  }
}
