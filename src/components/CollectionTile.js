import React from "react";
import { Link } from "react-router";

import ArtistProfile from './ArtistProfile';

export default class CollectionTile extends React.Component {
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
  resizeContent() {

  }
  render() {
    return (
      <div className="tile">
        <img src={this.props.imgsrc}></img>
        <div className="innercontent">
          <h3>DRAM</h3>
          <button>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}
