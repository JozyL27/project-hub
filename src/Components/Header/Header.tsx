import React from "react";
import { Link } from "react-router-dom";
import AvatarNavigation from "../AvatarNavigation/AvatarNavigation";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link to="/" className="headerLink">
          Project Hub
        </Link>
      </h1>
      <AvatarNavigation />
    </header>
  );
};

export default Header;
