import React, { useContext } from "react";
import { DrawerContext } from "../contexts/DrawerContext";

import dartImage from "../assets/dart.png";
const Navbar = () => {
  const { isDrawerVisible, setIsDrawerVisible } = useContext(DrawerContext);

  const handleDrawerVisible = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };
  return (
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-item ml-5">
              <img src={dartImage} alt="dart" />
            </span>
            <span
              onClick={handleDrawerVisible}
              className="navbar-burger burger"
              data-target="navbarMenuHeroB"
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroB" className="navbar-menu">
            <div className="navbar-end">
              <span className="navbar-item">
                <span onClick={handleDrawerVisible} className="mr-5 mt-2">
                  <i className="fas fa-bars fa-lg" />
                </span>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
