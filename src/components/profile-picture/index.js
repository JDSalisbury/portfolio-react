import React, { Component } from "react";
import "./index.css";
class ProfilePicture extends Component {
  render() {
    return (
      <div className="profilePicture">
        <img
          className="pic"
          src="https://vignette.wikia.nocookie.net/rogerrabbit/images/4/4d/Roger_Rabbit_11.png/revision/latest/top-crop/width/360/height/450?cb=20131219163533"
          // src={require("../../static/noodz.jpg")}
          alt="Portfolio Pic"
        />
      </div>
    );
  }
}

export default ProfilePicture;
