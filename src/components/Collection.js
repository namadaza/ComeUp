import React from "react";
import { Link } from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
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

    tileList = _.map(this.props.genre == "hiphop" ? HIPHOP_ARTISTS : RB_ARTISTS, (item) => {
      return <CollectionTile key={item.artistname} artistname={item.artistname} imgsrc={item.imgsrc} />;
    })

    return (
      <div className="row single-item">{tileList}</div>
    )
  }
  renderArtistProfile() {
    let activeImgsrc;
    let activeGenre;
    _.map(this.props.genre == "hiphop" ? HIPHOP_ARTISTS : RB_ARTISTS, (item) => {
      if (item.artistname == this.state.activeArtistProfile) {
        activeImgsrc = item.imgsrc;
        this.props.genre == "hiphop" ? (activeGenre = "hiphop") : (activeGenre = "r&b");
      }
    })
    if (this.state.activeArtistProfile != "" && this.props.genre == activeGenre) {
      return (
        <ArtistProfile key={this.state.activeArtistProfile} artistname={this.state.activeArtistProfile} imgsrc={activeImgsrc}/>
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
        <ReactCSSTransitionReplace
          transitionName="artistprofile-animation"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}>
          {this.renderArtistProfile()}
        </ReactCSSTransitionReplace>
      </span>
    );
  }
}
