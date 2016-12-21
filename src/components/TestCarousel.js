import React, { Component } from 'react'

export default class TestCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    var style = {
      padding: "40px",
      width: "80%",
      color: "#333",
      background: "#419be0",
      padding: "20px",
      margin: "auto",
      width: "90%"
    };
    return (
      <div style={style}>
        <h2> Single Item</h2>
        <div className="single-item">
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
        </div>
      </div>
    );
  }
}
