import React from "react";
import { Link } from "react-router";

export default class RBCollection extends React.Component {

  render() {
    return (
      <section className="bg-primary collection" id="collection">
        <h2 className="section-heading">R&B Collection</h2>
        <div className="row single-item">
          <div className="tile">
            <img src="img/anderson.jpeg"></img>
          </div>
          <div className="tile">
            <img src="img/bilal.jpg"></img>
          </div>
          <div className="tile">
            <img src="img/bj.jpg"></img>
          </div>
          <div className="tile">
            <img src="img/dang.jpg"></img>
          </div>
          <div className="tile">
            <img src="img/elijah.png"></img>
          </div>
          <div className="tile">
            <img src="img/jhene.jpg"></img>
          </div>
          <div className="tile">
            <img src="img/miguel.jpg"></img>
          </div>
        </div>
      </section>
    );
  }
}
