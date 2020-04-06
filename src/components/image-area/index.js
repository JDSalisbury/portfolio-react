import React from "react";
import "./image-area.css";

function ImageArea() {
  return (
    <>
      <div className="images">
        <img src="https://picsum.photos/id/12/360/200" alt="Blog Site" />
        <img src="https://picsum.photos/id/11/360/200" alt="Blog Site" />
        <img src="https://picsum.photos/id/10/360/200" alt="Blog Site" />
        <img src="https://picsum.photos/id/9/360/200" alt="Blog Site" />
      </div>
      <div className="image-intro-content">
        <h2 className="image-section-heading">
          Want to make an original website yourself?
        </h2>
      </div>
    </>
  );
}

export default ImageArea;
