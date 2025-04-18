import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header_logo">
          <StorefrontIcon className="header_logoImage" fontSize="large" />
          <h2 className="header_logoTitle">eShop</h2>
        </div>
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="nav_item">
            <div className="nav_itemLineOne">Hello Guest</div>
            <div className="nav_itemLineTwo">Sign In</div>
          </div>
        </Link>
        <div className="nav_item">
          <div className="nav_itemLineOne">Your</div>
          <div className="nav_itemLineTwo">Shop</div>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav_itemBasket">
            <ShoppingBasketIcon />
            <div className="nav_itemLineTwo  nav_basketCount">
              {basket.length}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
