import React from 'react';
import { BackgroundImage, ProfilePicture, Link } from '../../components';

function Home() {
  return (
    <Link path="/projects">
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
        <div className="msg">Lets make some dope shit</div>
      </BackgroundImage>
    </Link>
  );
}

export default Home;
