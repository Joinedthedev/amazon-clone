import React from "react";
import "@/styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
const Header = () => {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
        />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
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

        <Link to="/Checkout">
          <div className="header-optionBasket">
            <ShoppingCartIcon />

            <span className="header-optionLineTwo header-BasketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
