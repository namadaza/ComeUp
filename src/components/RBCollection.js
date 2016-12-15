import React from "react";
import { Link } from "react-router";

export default class RBCollection extends React.Component {

  render() {
    return (
      <section className="bg-primary" id="rbcollection">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 text-center">
              <h2 className="section-heading">R&B Collection</h2>
              <hr className="light"></hr>
                <p className="text-faded">Start Bootstrap has everything you need to get your new website up and running in no time! All of the templates and themes on Start Bootstrap are open source, free to download, and easy to use. No strings attached!</p>
              </div>
            </div>
          </div>
        </section>
    );
  }
}
