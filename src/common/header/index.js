import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import Hometowheroesicon from "../../assets/svg/Hometowheroesicon";

function Header() {
  return (
    <>
      <header>
        <div className="header-container-main">
          <div className="header-content-alignment">
            <div className="header-logo-main">
              <NavLink to={"/"}>
                <Hometowheroesicon />
              </NavLink>
            </div>
            <div className="header-content-main">
              <NavLink to={"/Ausstellung2023"}>AUSSTELLUNG 2023 </NavLink>
              <NavLink to={"/"}>AUSSTELLUNG 2024 </NavLink>
              <NavLink to={"/"}>DONATE </NavLink>
              <NavLink to={"/"}>FOLLOW THE JOURNEY </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
