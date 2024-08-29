import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./footer.scss";

import Jesamicon from "../../assets/svg/Jesamicon";

export default function Footer({
  navLinkColor: propNavLinkColor,
  svgPathColor: propSvgPathColor1,
  svgPathColor2: propSvgPathColor2,
}) {
  const location = useLocation();
  const { pathname } = location;

  let navLinkColor = propNavLinkColor;
  let svgPathColor1 = propSvgPathColor1;
  let svgPathColor2 = propSvgPathColor2;

  switch (pathname) {
    case "/":
    case "/ausstellung2023":
    case "/followthejourney":
    case "/impressum":
    case "/datenschutz":
      navLinkColor = "#000000";
      svgPathColor1 = "#1B1B1B";
      svgPathColor2 = "#000000";
      break;
    default:
      navLinkColor = "#F6F1E5";
      svgPathColor1 = "#F6F1E5";
      svgPathColor2 = "#F6F1E5";
      break;
  }

  const isSupportVisionPage =
    pathname === "/ausstellung2023" || pathname === "/followthejourney";

  if (pathname === "/ausstellung2024") {
    return null;
  }

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-last-content-main">
          {isSupportVisionPage && (
            <>
              <h1>IN CASE YOU WANT TO SUPPORT OUR VISION</h1>
              <div className="contact-div">
                <span style={{ color: navLinkColor }}>CONTACT</span>
                <p style={{ color: navLinkColor }}>TOM VON BELOW</p>
                <NavLink to={"/"} style={{ color: navLinkColor }}>
                  +49 177 2362335
                </NavLink>
                <NavLink to={"/"} style={{ color: navLinkColor }}>
                  info@tvbfilm.com
                </NavLink>
              </div>
            </>
          )}

          <div className="impressum-and-datenschutz-links-main">
            <NavLink to={"/impressum"} style={{ color: navLinkColor }}>
              IMPRESSUM
            </NavLink>
            <NavLink to={"/datenschutz"} style={{ color: navLinkColor }}>
              DATENSCHUTZ
            </NavLink>
          </div>
          <div className="jesam-icon-div-main">
            <NavLink to={"/"}>
              <Jesamicon color1={svgPathColor1} color2={svgPathColor2} />
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
