import React from "react";
import { Link } from "react-router";

import TopNav from "./TopNav";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <TopNav history={this.props.history}/>
        {this.props.children}
      </div>
    );
  }
}
