import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <section>
      <Link to="/">
        <h1>Project Hub</h1>
      </Link>
      <u>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/register">
          <li>Register</li>
        </Link>
      </u>
    </section>
  );
};

export default Header;
