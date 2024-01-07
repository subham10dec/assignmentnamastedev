import React from "react";
import "./headerComponent.css";
import swiggyLogo from "./swiggy.png";
const HeaderComponent = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-responsive">
          <div className="image-logo">
            <a href="">
              <img src={swiggyLogo} alt="swiggy" width={"40px"} />
            </a>
          </div>
          <div className="searchbox">
            <input type="text" placeholder="Search your Food" />
          </div>
          <div className="parentlink-container">
            <ul className="navbar-links">
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
