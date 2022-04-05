import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header ">
      <div className="header-wrapper container">
        <div className="brand">
          <div className="logo-img">
            <img
              className="bg-logo"
              src="images/Vector.png"
              alt="logo background"
            />
            <img className="logo" src="images/top-vector.png" alt="logo" />
            <span className="brand-text">dukaan</span>
          </div>
        </div>
        <div className="nav">
          <span>Sign In</span>
          <button className="download-btn">Dukaan for PC</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
