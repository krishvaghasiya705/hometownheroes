import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./header.scss";
import Hometowheroesicon from "../../assets/svg/Hometowheroesicon";

function Header() {
  const location = useLocation();
  let headerColor, svgPathColor, navLinkColor;

  switch (location.pathname) {
    case "/followthejourney":
    case "/":
    case "/ausstellung2023":
    case "/impressum":
    case "/datenschutz":
      headerColor = "#f6f1e5";
      svgPathColor = "#000000";
      navLinkColor = "#000000";
      break;
    case "/ausstellung2024":
      headerColor = "#1A1A1A";
      svgPathColor = "#FFFFFF";
      navLinkColor = "#F6F1E5";
      break;
    default:
      headerColor = "#1a1a1a";
      svgPathColor = "#fff";
      navLinkColor = "#F6F1E5";
      break;
  }

  return (
    <header style={{ backgroundColor: headerColor }}>
      <div className="container-main">
        <div className="header-content-alignment">
          <div className="header-logo-main">
            <NavLink to={"/"}>
              <Hometowheroesicon color={svgPathColor} />
            </NavLink>
          </div>
          <div className="header-content-main">
            <NavLink to={"/ausstellung2023"}>
              <p style={{ color: navLinkColor }}>AUSSTELLUNG 2023</p>
            </NavLink>
            <NavLink to={"/ausstellung2024"}>
              <p style={{ color: navLinkColor }}>AUSSTELLUNG 2024</p>
            </NavLink>
            <NavLink to={"/donate"}>
              <p style={{ color: navLinkColor }}>DONATE</p>
            </NavLink>
            <NavLink to={"/followthejourney"}>
              <p style={{ color: navLinkColor }}>FOLLOW THE JOURNEY</p>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
