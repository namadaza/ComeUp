import React from "react";
import { Link } from "react-router";
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import Blur from 'react-blur';

import FeaturedArtistStore from '../stores/FeaturedArtistStore';
import FeaturedArtistActions from '../actions/FeaturedArtistActions';

export default class FeaturedArtistTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = FeaturedArtistStore.getState();
    this.onChange = this.onChange.bind(this);
    FeaturedArtistActions.setSplashInfo(this.props.artistname);
    this.showSplash = true;
    this.resources = [];

    if (props.font) {
      this.fontSize = props.font;
      this.lineHeight = "2";
      this.useSmallStyle = true;
    }
  }
  componentDidMount() {
    FeaturedArtistStore.listen(this.onChange);
    FeaturedArtistActions.getResources(this.props.artistname);
  }
  componentWillUnmount() {
    FeaturedArtistStore.unlisten(this.onChange);
  }
  onChange(state) {
    //use call back and forceUpdate to re-render
    this.setState(state, () => {
      this.showSplash = this.state.showSplashByArtistname[this.props.artistname];
      //might cause performance issues
      if (this.props.artistname in this.state.resourcesByArtistname && this.resources.length == 0) {
        this.resources.push(this.state.resourcesByArtistname[this.props.artistname][0]);
        console.log("ResourcesTile : %j", this.resources);
      }
      this.forceUpdate();
    });
  }
  renderFeaturedArtistContent(btnStyle, h1DefaultStyle, h1SmallStyle) {
    if (this.resources.length != 0) {
      const blurBg = {
        backgroundImage: 'url(' + this.resources[0].albumBlurImgUrl + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
      }

      if (this.showSplash) {
        return (
          <div className="splash" key="splash">
            <h1 style={this.useSmallStyle ? h1SmallStyle : h1DefaultStyle}>{this.props.artistname}</h1>
            <img src={this.resources[0].albumImgUrl}></img>
            <h3>{this.resources[0].album}</h3>
            <h5>
              <a className="play">
                <i className="fa fa-play-circle-o fa-fw fa-lg" aria-hidden="false"></i>
              </a>
              <a className="enqueue">
                <i className="fa fa-plus-circle fa-fw fa-lg" aria-hidden="false"></i>
              </a>
              &nbsp;
              {this.resources[0].songs[0].songName}
            </h5>
            <h5>
              <a className="play" href="">
                <i className="fa fa-play-circle-o fa-fw fa-lg" aria-hidden="false"></i>
              </a>
              <a className="enqueue" href="">
                <i className="fa fa-plus-circle fa-fw fa-lg" aria-hidden="false"></i>
              </a>
              &nbsp;
              {this.resources[0].songs[1].songName}
            </h5>
            <a href="#home" className="page-scroll">
              <button className="btn btn-primary btn-skinny"
                 style={btnStyle}
                 onClick={() => { FeaturedArtistActions.toggleSplashInfo(this.props.artistname); }}>
                SEE MORE
              </button>
            </a>
          </div>
        )
      }
      else {
        return (
          <div className="info" key="info">
            <div className="bg" style={blurBg}>
              <div className="bio">
                <h1>{this.props.artistname}</h1>
                  <p>
                  {this.resources[0].bio}
                  </p>
              </div>
              <div className="socialmedia">
                <img src="img/fb.png"></img>
                <img src="img/ig.png"></img>
                <img src="img/tw.png"></img>
                <img src="img/yt.png"></img>
              </div>
            </div>
            <button className="btn btn-primary btn-skinny"
               style={btnStyle}
               onClick={() => { FeaturedArtistActions.toggleSplashInfo(this.props.artistname); }}>
              SEE LESS
            </button>
          </div>
        )
      }
    }
  }
  render() {
    const btnStyle = {
      width: '100%',
      borderRadius: '0px !important',
      padding: '0px'
    }
    const h1DefaultStyle = {
      height: "55px",
    }
    const h1SmallStyle = {
      height: "55px",
      fontSize: this.fontSize,
      lineHeight: this.lineHeight
    }
    return (
      <div className="featuredartisttile">
        <ReactCSSTransitionReplace
          transitionName="featured-animation"
          transitionEnterTimeout={1200}
          transitionLeaveTimeout={800}>
          {this.renderFeaturedArtistContent(btnStyle, h1DefaultStyle, h1SmallStyle)}
        </ReactCSSTransitionReplace>
      </div>
    );
  }
}
