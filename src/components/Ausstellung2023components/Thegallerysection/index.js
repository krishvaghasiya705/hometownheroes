import React from "react";
import "./thegallerysection.scss";

import Thegalleryimage from "../../../assets/image/thegalleryimage.png";

function Thegallerysection() {
  return (
    <div className="the-gallery-section-main">
      <div className="container-main">
        <div className="the-gallery-section">
            <h1>THE GALLERY</h1>
          <div className="the-gallery-section-image">
            <img src={Thegalleryimage} alt="Thegalleryimage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thegallerysection;
