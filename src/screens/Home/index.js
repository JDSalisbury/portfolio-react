import React from "react";
import BackgroundImage from "../../components/background-image";
import ProfilePicture from "../../components/profile-picture";

function Home() {
  return (
    <div className="Home">
      <BackgroundImage
        src="https://source.unsplash.com/featured/?code"
        opacity=".8"
        color="#B256CD"
        transition="1s"
        position="relative"
        width="100%"
        height="100vh"
      >
        <ProfilePicture />
      </BackgroundImage>
    </div>
  );
}

export default Home;
