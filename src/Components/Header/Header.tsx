import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Login/LoginButton";
import LogoutButton from "../Login/LogoutButton";
import "./Header.css";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <header className="header">
      <Link to="/" className="headerLink">
        <h1>Project Hub 🚀💫</h1>
      </Link>
      <div className="headerNavigation">
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        {isAuthenticated ? (
          <Link to="/list">
            <div>Projects</div>
          </Link>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
