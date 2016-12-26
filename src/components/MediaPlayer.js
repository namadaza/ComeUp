import React from "react";
import { Link } from "react-router";

export default class MediaPlayer extends React.Component {

  render() {
    return (
      <div className="mediaplayer">
        <div className="controls">
          <a className="stepback" href="">
            <i className="fa fa-step-backward fa-fw" aria-hidden="true"></i>
          </a>
          <a className="play" href="">
            <i className="fa fa-play fa-fw fa-lg" aria-hidden="true"></i>
          </a>
          <a className="pause" href="">
            <i className="fa fa-pause fa-fw fa-lg" aria-hidden="true"></i>
          </a>
          <a className="stop" href="">
            <i className="fa fa-stop fa-fw fa-lg" aria-hidden="true"></i>
          </a>
          <a className="stepforward" href="">
            <i className="fa fa-step-forward fa-fw" aria-hidden="true"></i>
          </a>
          <div className="progress">
            <div className="bar"></div>
          </div>
          <div className="currentplaying"></div>
          <div className="time"></div>
        </div>
      </div>
    );
  }
}
