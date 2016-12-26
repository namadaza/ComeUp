import React from "react";
import { Link } from "react-router";

import FeaturedArtistStore from '../stores/FeaturedArtistStore';
import FeaturedArtistActions from '../actions/FeaturedArtistActions';

export default class FeaturedArtistLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = FeaturedArtistStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    console.log("artistname: " + this.props.artistname);
    FeaturedArtistStore.listen(this.onChange);
    FeaturedArtistActions.getResources(this.props.artistname);
  }
  componentWillUnmount() {
    FeaturedArtistStore.unlisten(this.onChange);
  }
  onChange(state) {
    this.setState(state);
  }
  onClickA() {
    console.log("TRIGGERED");
  }
  render() {
    const btnStyle = {
      width: '100%',
      borderRadius: '0px !important'
    }

    var contentBgImg = 'img/JEFFREY_album_blur.jpg'

    const blurBg = {
      backgroundImage: 'url(' + contentBgImg + ')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
    }
    return (
        <div className="featuredartisttile">
          <div className="splash"
               style={this.state.showSplash ? {} : {display: 'none'}}>
            <h1>Young Thug</h1>
            <img src="img/JEFFREY_album.jpg" alt="JEFFREY"></img>
            <h3>JEFFREY</h3>
            <h5>
              <i className="fa fa-play-circle-o fa-fw fa-lg" aria-hidden="false"></i>
              &nbsp;
              Harambe
            </h5>
            <h5>
              <i className="fa fa-play-circle-o fa-fw fa-lg" aria-hidden="false"></i>
              &nbsp;
              Floyd Mayweather
            </h5>
            <button className="btn btn-primary btn-skinny"
               style={btnStyle}
               onClick={() => { FeaturedArtistActions.toggleSplashInfo() }}>
              SEE MORE
            </button>
          </div>
          <div className="info"
               style={this.state.showInfo ? {} : {display: 'none'}}>
            <div className="bg" style={blurBg}>
              <div className="bio">
                <h1>Young Thug</h1>
                  <p>
                  Jeffery Lamar Williams[4] (born August 16, 1991), best known professionally as Young Thug, is
                  an American rapper from Atlanta, Georgia. Known for his unconventional vocal style, fashion,
                  and persona, he first received attention for his collaborations with fellow Southern rappers,
                  such as Rich Homie Quan, Birdman, Waka Flocka Flame, T.I., and Gucci Mane. Young Thug
                  initially released a series of independent mixtapes beginning in 2011 with I Came From Nothing.
                  In early 2013, he signed a record deal with Gucci Mane's 1017 Records[5] and later that year he
                  released his label debut mixtape 1017 Thug, which featured the critically praised
                  track "Picacho."[6]
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
               onClick={() => { FeaturedArtistActions.toggleSplashInfo() }}>
              SEE LESS
            </button>
        </div>
      </div>
    );
  }
}
