import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      Header
      <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon" />
      <div className="header-search">
        <input className="header-searchInput" type="text" />
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">Hello Guest</span>
          <span className="header-optionLineTwo">Sign In</span>
        </div>

        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTwo">Orders</span>
        </div>

        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo"> prime</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
