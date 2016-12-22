import React from "react";
import { Link } from "react-router";

export default class ArtistProfile extends React.Component {

  render() {
    var contentBgImg = 'img/dasefxcontent.jpg'
    var contentStyle = {
      backgroundImage: 'url(' + contentBgImg + ')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%'
    };
    return (
      <div className="artistprofile">
        <div className="artistsocialmedia">
          <img src="img/fb.png"></img>
          <img src="img/ig.png"></img>
          <img src="img/tw.png"></img>
          <img src="img/yt.png"></img>
        </div>
        <div className="artistname">
          <h1>Das EFX</h1>
          <div className="artistbio">
            <p>
            Das EFX is an American hip hop duo. It consists of emcees Dray (also known as Krazy Drayz,
            born Andre Weston, September 9, 1970) and Skoob (also known as Books, born William "Willie"
            Hines, November 27, 1970). They named themselves "DAS" standing for "Dray and Skoob" and "EFX"
            meaning "effects". They rose to popularity in the early 1990s due to their affiliation with EPMD's
            Hit Squad and the duo's stream of consciousness lyrical delivery, which became one of the most
            influential lyrical styles in hip hop music at the time.[1] Their style combined nonsensical
            lines with a fast-paced flow (that included words that end with "-iggedy") and numerous
            pop culture references.
            </p>
          </div>
        </div>
        <div className="artistcontent" style={contentStyle}>
        </div>
      </div>
    );
  }
}
