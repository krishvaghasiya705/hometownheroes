import React, { useState, useEffect } from "react";
import "./sidebar.scss";
import Closeicon from "../../assets/svg/Closeicon";
import { NavLink } from "react-router-dom";
import Sidebarjedsamicon from "../../assets/svg/Sidebarjedsamicon";
import Sidebarbackground from "../../assets/svg/Sidebarbackground";

function Sidebar({ isOpen, toggleSidebar }) {
  const [isClosing, setIsClosing] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowContent(false);
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 600);
      document.body.style.overflow = "hidden";
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = ""; // Reset overflow when component unmounts or isOpen changes
      };
    } else {
      setShowContent(false);
      setIsClosing(false);
      document.body.style.overflow = ""; // Reset overflow when sidebar closes
    }
  }, [isOpen]);

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        toggleSidebar();
        setIsClosing(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isClosing, toggleSidebar]);

  const handleClose = () => {
    setIsClosing(true);
  };

  return (
    <div className={`sidebar-main ${isOpen ? "open" : ""} ${isClosing ? "closing" : ""}`}>
      <div className="sidebar-background-main">
        <div className="sidebar-background">
          <Sidebarbackground isOpen={isOpen} />
        </div>
        {showContent && (
          <div className="sidebar">
            <div className="close-menu-div">
              <Closeicon onClick={handleClose} />
            </div>
            <div className="sidebar-content-main">
              <div className="sidebar-link-col-one">
                <NavLink to="/ausstellung2023" onClick={handleClose}>
                  AUSSTELLUNG <p>2023</p>
                </NavLink>
              </div>
              <span></span>
              <div className="sidebar-link-col-one">
                <NavLink to="/ausstellung2024" onClick={handleClose}>
                  AUSSTELLUNG <p>2024</p>
                </NavLink>
              </div>
              <span></span>
              <div className="sidebar-link-col-two">
                <NavLink to="/donate" onClick={handleClose}>
                  donate
                </NavLink>
              </div>
              <span></span>
              <div className="sidebar-link-col-two">
                <NavLink to="/followthejourney" onClick={handleClose}>
                  follow the journey
                </NavLink>
              </div>
            </div>
            <div className="sidebar-footer">
              <div className="sidebar-footer-impressum-and-datenschutz-links-main">
                <NavLink to="/impressum" onClick={handleClose}>
                  IMPRESSUM
                </NavLink>
                <NavLink to="/datenschutz" onClick={handleClose}>
                  DATENSCHUTZ
                </NavLink>
              </div>
              <div className="sidebar-footer-jesam-icon-mobile-div-main">
                <NavLink to="/" onClick={handleClose}>
                  <Sidebarjedsamicon />
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;