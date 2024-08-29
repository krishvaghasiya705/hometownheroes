import React from "react";
import "./clocksection.scss";

function Clocksection({
  borderColor,
  boxBackgroundColor,
  boxFontColor,
  labelFontColor,
  headerFontColor,
}) {
  return (
    <div className="auktion-date-div-main">
      <h3 style={{ color: headerFontColor }}>AUKTION 2024 NOCH</h3>

      <div className="auktion-date-alignment-main">
        <div className="auktion-date-alignment">
          <div
            className="auktion-date-border"
            style={{ backgroundColor: borderColor }}
          ></div>
          <div className="auktion-date-show-box-alignment">
            <div
              className="auktion-date-show-box"
              style={{ backgroundColor: boxBackgroundColor }}
            >
              <span style={{ color: boxFontColor }}>13</span>
            </div>
            <p style={{ color: labelFontColor }}>DAYS</p>
          </div>
          <div className="auktion-date-show-box-alignment">
            <div
              className="auktion-date-show-box"
              style={{ backgroundColor: boxBackgroundColor }}
            >
              <span style={{ color: boxFontColor }}>23</span>
            </div>
            <p style={{ color: labelFontColor }}>HOURS</p>
          </div>
          <div className="auktion-date-show-box-alignment">
            <div
              className="auktion-date-show-box"
              style={{ backgroundColor: boxBackgroundColor }}
            >
              <span style={{ color: boxFontColor }}>59</span>
            </div>
            <p style={{ color: labelFontColor }}>MINUTES</p>
          </div>
          <div className="auktion-date-show-box-alignment">
            <div
              className="auktion-date-show-box"
              style={{ backgroundColor: boxBackgroundColor }}
            >
              <span style={{ color: boxFontColor }}>59</span>
            </div>
            <p style={{ color: labelFontColor }}>SECONDS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clocksection;