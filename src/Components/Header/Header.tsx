import React from "react";
import { Link } from "react-router-dom";
import AvatarNavigation from "../AvatarNavigation/AvatarNavigation";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="headerLink">
        <h1>Project Hub 🚀💫</h1>
      </Link>
      <AvatarNavigation />
    </header>
  );
};

export default Header;
