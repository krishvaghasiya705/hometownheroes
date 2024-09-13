import React from "react";
import "./qvarterimagesection.scss";

import Qvarterimage1 from "../../../assets/image/qvarterimage1.webp";
import Qvarterimage2 from "../../../assets/image/qvarterimage2.webp";
import Qvarterimage3 from "../../../assets/image/qvarterimage3.webp";

function Qvarterimagesection() {
  return (
    <div className="qvarter-image-section-main">
      <div className="qvarter-image-section-container">
        <div className="qvarter-image-section">
          <div className="qvarter-image-side1">
            <img src={Qvarterimage1} alt="Qvarterimage1" rel="preload"/>
          </div>
          <div className="qvarter-image-side2">
            <div className="qvarter-image-side2-alignment">
              <div className="qvarter-image-side2-alignment1">
                <img src={Qvarterimage2} alt="Qvarterimage2" rel="preload"/>
              </div>
              <div className="qvarter-image-side2-alignment2">
                <img src={Qvarterimage3} alt="Qvarterimage3" rel="preload" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qvarterimagesection;
