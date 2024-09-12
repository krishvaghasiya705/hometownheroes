import React from "react";
import "./samplesection.scss";

import Sampleimage1 from "../../../assets/image/sampleimage1.png"
import Sampleimage2 from "../../../assets/image/sampleimage2.png"
import Sampleimage3 from "../../../assets/image/sampleimage3.png"

function Samplesection() {
  return (
    <div className="sample-section-main">
      <div className="sample-section-container">
        <div className="sample-section">
          <h1>SAMPLES</h1>
          <div className="sample-section-images-grd">
            <img src={Sampleimage1} alt="Sampleimage1" rel="preload"/>
            <img src={Sampleimage2} alt="Sampleimage2" rel="preload"/>
            <img src={Sampleimage3} alt="Sampleimage3" rel="preload"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Samplesection;
