import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";

import Jesamicon from "../../assets/svg/Jesamicon.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-last-content-main">
          <h1>IN CASE YOU WANT TO SUPPORT OUR VISION</h1>
          <div className="contact-div">
            <span>CONTACT</span>
            <p>TOM VON BELOW</p>
            <NavLink to={"/"}>+49 177 2362335 </NavLink>
            <NavLink to={"/"}>info@tvbfilm.com</NavLink>
          </div>
          <div>
            <div className="impressum-and-datenschutz-links-main">
              <NavLink to={"/"}>IMPRESSUM</NavLink>
              <NavLink to={"/"}>DATENSCHUTZ</NavLink>
            </div>
            <div className="jesam-icon-div-main">
              <NavLink to={"/"}>
                <img src={Jesamicon} alt="Jesamicon" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
