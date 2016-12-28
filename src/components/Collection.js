import React from "react";
import { Link } from "react-router";
import _ from "underscore";

import CollectionTile from "./CollectionTile";
import CollectionTileStore from "../stores/CollectionTileStore";
import ArtistProfile from "./ArtistProfile";

const ARTISTS = [
  {"artistname" : "D.R.A.M", "imgsrc" : "img/brocolli.jpg"},
  {"artistname" : "Das EFX", "imgsrc" : "img/dasefx.jpg"},
  {"artistname" : "MF DOOM", "imgsrc" : "img/food.jpg"},
  {"artistname" : "Geto Boys", "imgsrc" : "img/getoboys.jpg"},
  {"artistname" : "Gucci Mane", "imgsrc" : "img/gucci.jpg"},
  {"artistname" : "Shabba Ranks", "imgsrc" : "img/shabbaranks.jpg"}
]
export default class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = CollectionTileStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    CollectionTileStore.listen(this.onChange);
  }
  componentWillUnmount() {
    CollectionTileStore.unlisten(this.onChange);
  }
  onChange(state) {
    this.setState(state, () => {
      this.forceUpdate();
    });
  }
  renderCollectionTile(item) {
    return(
        <CollectionTile artistname={item.artistname} imgsrc={item.imgsrc} />
    )
  }
  renderArtistProfile(item) {
    if (this.state.showArtistProfileByArtistname[item.artistname] == true) {
      return (
        <ArtistProfile artistname={item.artistname} imgsrc={item.imgsrc} visible="true"/>
      )
    }
  }
  render() {
    return (
      <span>
        <section className="bg-primary collection" id="collection">
          <h2 className="section-heading">{this.props.title}</h2>
          <div className="row single-item">
            {_(ARTISTS).map(this.renderCollectionTile, this)}
          </div>
        </section>
        {_(ARTISTS).map(this.renderArtistProfile, this)}
      </span>
    );
  }
}
