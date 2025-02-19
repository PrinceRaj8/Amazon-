import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Amazon Clone</div>
      <input type="text" placeholder="Search Amazon" className="search-bar" />
      <div className="nav-links">
        <span>Sign In</span>
        <span>Orders</span>
        <span>Cart</span>
      </div>
    </header>
  );
}

export default Header;
