import React, { useState, useEffect, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./header.scss";
import Hometowheroesicon from "../../assets/svg/Hometowheroesicon";
import Hemburger from "../../assets/svg/Hemburger";
import Sidebar from "../../components/Sidebar";

function Header() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setIsScrollingDown(true);
    } else {
      setIsScrollingDown(false);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  return (
    <header
      style={{
        backgroundColor: headerColor,
        transform: isScrollingDown ? "translateY(-108px)" : "translateY(-1px)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <div className="container-main">
        <div className="header-menu">
          <Hemburger color={svgPathColor} onClick={toggleSidebar} />
        </div>
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

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
}

export default Header;