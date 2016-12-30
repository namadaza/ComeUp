import React from "react";
import { Link } from "react-router";
import _ from "underscore";

import CollectionTile from "./CollectionTile";
import CollectionTileStore from "../stores/CollectionTileStore";
import ArtistProfile from "./ArtistProfile";

const HIPHOP_ARTISTS = [
  {"artistname" : "D.R.A.M", "imgsrc" : "img/brocolli.jpg"},
  {"artistname" : "Das EFX", "imgsrc" : "img/dasefx.jpg"},
  {"artistname" : "MF DOOM", "imgsrc" : "img/food.jpg"},
  {"artistname" : "Geto Boys", "imgsrc" : "img/getoboys.jpg"},
  {"artistname" : "Gucci Mane", "imgsrc" : "img/gucci.jpg"},
  {"artistname" : "Shabba Ranks", "imgsrc" : "img/shabbaranks.jpg"}
];

const RB_ARTISTS = [
  {"artistname" : "Anderson Paak", "imgsrc" : "img/anderson.jpeg"},
  {"artistname" : "Bilal", "imgsrc" : "img/bilal.jpg"},
  {"artistname" : "BJ the Chicago Kid", "imgsrc" : "img/bj.jpg"},
  {"artistname" : "Mac Miller", "imgsrc" : "img/dang.jpg"},
  {"artistname" : "Miguel", "imgsrc" : "img/miguel.jpg"},
  {"artistname" : "Elijah", "imgsrc" : "img/elijah.png"}
];

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
  renderCollectionTile() {
    var tileList;

    if (this.props.genre == "hiphop") {
      tileList = _.map(HIPHOP_ARTISTS, (item) => {
        return <CollectionTile artistname={item.artistname} imgsrc={item.imgsrc} />;
      })
    }
    if (this.props.genre == "r&b") {
      tileList = _.map(RB_ARTISTS, (item) => {
        return <CollectionTile artistname={item.artistname} imgsrc={item.imgsrc} />;
      })
    }

    return (
      <div className="row single-item">{tileList}</div>
    )
  }
  renderArtistProfile() {
    if (this.props.genre == "hiphop") {
      return (
        _.map(HIPHOP_ARTISTS, (item) => {
          if (this.state.showArtistProfileByArtistname[item.artistname] == true) {
            return (
              <ArtistProfile artistname={item.artistname} imgsrc={item.imgsrc} visible="true"/>
            )
          }
        })
      )
    }
    if (this.props.genre == "r&b") {
      return (
        _.map(RB_ARTISTS, (item) => {
          if (this.state.showArtistProfileByArtistname[item.artistname] == true) {
            return (
              <ArtistProfile artistname={item.artistname} imgsrc={item.imgsrc} visible="true"/>
            )
          }
        })
      )
    }
  }
  render() {
    return (
      <span>
        <section className="bg-primary collection" id="collection">
          <h2 className="section-heading">{this.props.title}</h2>
          {this.renderCollectionTile()}
        </section>
        {this.renderArtistProfile()}
      </span>
    );
  }
}
