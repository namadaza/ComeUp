import React from "react";
import { Link } from "react-router";

import CollectionTile from "./CollectionTile";

export default class Collection extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  onChange(state) {
    //use call back and forceUpdate to re-render
    this.setState(state, () => {});
  }
  render() {
    return (
      <section className="bg-primary collection" id="collection">
        <h2 className="section-heading">{this.props.title}</h2>
        <div className="row single-item">
          <CollectionTile imgsrc="img/brocolli.jpg"></CollectionTile>
          <CollectionTile imgsrc="img/dasefx.jpg"></CollectionTile>
          <CollectionTile imgsrc="img/food.jpg"></CollectionTile>
          <CollectionTile imgsrc="img/getoboys.jpg"></CollectionTile>
          <CollectionTile imgsrc="img/gucci.jpg"></CollectionTile>
          <CollectionTile imgsrc="img/shabbaranks.jpg"></CollectionTile>
        </div>
      </section>
    );
  }
}
