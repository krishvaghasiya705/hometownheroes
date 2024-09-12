import React, { useState, useEffect, useCallback, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./header.scss";
import Hometowheroesicon from "../../assets/svg/Hometowheroesicon";
import Hemburger from "../../assets/svg/Hemburger";
import Sidebar from "../../components/Sidebar";
import { debounce } from "lodash";

function Header() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { headerColor, svgPathColor, navLinkColor } = useMemo(() => {
    switch (location.pathname) {
      case "/followthejourney":
      case "/":
      case "/ausstellung2023":
      case "/impressum":
      case "/datenschutz":
        return {
          headerColor: "#f6f1e5",
          svgPathColor: "#000000",
          navLinkColor: "#000000",
        };
      case "/ausstellung2024":
        return {
          headerColor: "#1A1A1A",
          svgPathColor: "#FFFFFF",
          navLinkColor: "#F6F1E5",
        };
      default:
        return {
          headerColor: "#1a1a1a",
          svgPathColor: "#fff",
          navLinkColor: "#F6F1E5",
        };
    }
  }, [location.pathname]);

  const toggleSidebar = () => {
    if (!isSidebarOpen) {
      setTimeout(() => setIsSidebarOpen(true), 600);
    } else {
      setIsSidebarOpen(false);
    }
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsScrollingDown(true);
    } else {
      setIsScrollingDown(false);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    const debouncedScroll = debounce(handleScroll, 50);
    window.addEventListener("scroll", debouncedScroll);
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
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
            <NavLink to={"/"} aria-label="home">
              <Hometowheroesicon color={svgPathColor} />
            </NavLink>
          </div>
          <div className="header-content-main">
            <NavLink to={"/ausstellung2023"} aria-label="Ausstellung 2023">
              <p style={{ color: navLinkColor }}>AUSSTELLUNG 2023</p>
            </NavLink>
            <NavLink to={"/ausstellung2024"} aria-label="Ausstellung 2024">
              <p style={{ color: navLinkColor }}>AUSSTELLUNG 2024</p>
            </NavLink>
            <NavLink to={"/donate"} aria-label="Donate">
              <p style={{ color: navLinkColor }}>DONATE</p>
            </NavLink>
            <NavLink to={"/followthejourney"} aria-label="Follow the Journey">
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
