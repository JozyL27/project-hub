import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Login/LoginButton";
import LogoutButton from "../Login/LogoutButton";
import "./AvatarNavigation.css";
import { Link } from "react-router-dom";

const AvatarNavigation = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div className="headerNavigation">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      {isAuthenticated ? (
        <Link to="/list" className="headerLink">
          <div className="logDiv">Projects</div>
        </Link>
      ) : null}
      {isAuthenticated ? <Avatar src={user.picture} /> : <Avatar />}
    </div>
  );
};

export default AvatarNavigation;
