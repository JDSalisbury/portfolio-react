import React, { Component } from "react";
import "./index.css";
class ProfilePicture extends Component {
  render() {
    return (
      <div className="profilePicture">
        <img
          className="pic"
          src="https://media2.fdncms.com/orlando/imager/who-framed-roger-rabbit-is-back/u/original/2326480/1457413.jpg"
          alt="Portfolio Pic"
        />
      </div>
    );
  }
}

export default ProfilePicture;
