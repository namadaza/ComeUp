import React from "react";
import { Link } from "react-router";

import CollectionTileActions from '../actions/CollectionTileActions';
import CollectionTileStore from '../stores/CollectionTileStore';

export default class CollectionTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = CollectionTileStore.getState();
    this.onChange = this.onChange.bind(this);

    CollectionTileActions.setArtistProfile(this.props.artistname);
  }
  componentDidMount() {
    CollectionTileStore.listen(this.onChange);
  }
  componentWillUnmount() {
    CollectionTileStore.unlisten(this.onChange);
  }
  onChange(state) {
    this.setState(state, () => {
    });
  }
  render() {
    return (
      <div className="tile">
        <img src={this.props.imgsrc}></img>
        <div className="innercontent">
          <h3>{this.props.artistname}</h3>
          <button
            onClick={() => { CollectionTileActions.toggleArtistProfile(this.props.artistname); }}>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}
