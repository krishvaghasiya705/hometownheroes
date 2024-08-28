import React from "react";
import "./tomvon.scss";

function Tomvon() {
  return (
    <div className="tom-von-section-main">
      <div className="tom-von-section">
        <h4>ARTIST</h4>
        <div className="scroll-left">
          {Array(10).fill(<h1>TOM VON BELOW</h1>)}
        </div>
        <div className="scroll-right">
          {Array(10).fill(
            <h3>
              A PHOTOGRAPHIC JOURNEY THROUGH THE TOWNSHIPS OF CAPE TOWNMEDIA
              BRANDING
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tomvon;
