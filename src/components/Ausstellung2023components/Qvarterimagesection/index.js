import React from "react";
import "./qvarterimagesection.scss";

import Qvarterimage1 from "../../../assets/image/qvarterimage1.png";
import Qvarterimage2 from "../../../assets/image/qvarterimage2.png";
import Qvarterimage3 from "../../../assets/image/qvarterimage3.png";

function Qvarterimagesection() {
  return (
    <div className="qvarter-image-section-main">
      <div className="qvarter-image-section-container">
        <div className="qvarter-image-section">
          <div className="qvarter-image-side1">
            <img src={Qvarterimage1} alt="Qvarterimage1" />
          </div>
          <div className="qvarter-image-side2">
            <div className="qvarter-image-side2-alignment">
              <div className="qvarter-image-side2-alignment1">
                <img src={Qvarterimage2} alt="Qvarterimage2" />
              </div>
              <div className="qvarter-image-side2-alignment2">
                <img src={Qvarterimage3} alt="Qvarterimage3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qvarterimagesection;
