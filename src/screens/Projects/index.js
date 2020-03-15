import React from 'react';
import Lorem from './lorem';
import { Parallax } from 'react-parallax';

function Projects() {
  return (
    <>
      <Parallax
        blur={1}
        bgImage="https://opendoor.asu.edu/sites/default/files/activity_images/heic1509a_0.jpg"
        bgImageAlt="fucking generic picture of space from the hubble"
        strength={600}
      >
        <div style={{ height: '100vh' }}>
          <div style={{ height: '150px' }}></div>
          <h1 className="page">Building The Future of Tomorrow Today!</h1>
          <br />
          <br />
          <br />
          <br />
          <br />

          <p>
            Pork loin turkey brisket chuck hamburger burgdoggen, tenderloin ball
            tip chicken prosciutto bacon meatball doner swine. Hamburger
            shoulder capicola, beef prosciutto ball tip alcatra short loin strip
            steak chuck t-bone meatball corned beef tongue. Beef doner ground
            round, venison meatloaf pastrami meatball chuck ham hamburger
            kielbasa short loin flank. Alcatra chislic tail, shank tongue short
            ribs chicken buffalo pork belly venison biltong pork meatball
            andouille. Ground round turkey tenderloin, hamburger short ribs
            biltong burgdoggen.
          </p>
        </div>
        {/* <ColorBar></ColorBar> */}
      </Parallax>
      <Lorem />
    </>
  );
}

export default Projects;
