import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <div
      onClick={() => logout()}
      className="logDiv"
      style={{ cursor: "pointer", margin: "0 10px 0 10px" }}
    >
      Logout
    </div>
  );
};

export default LogoutButton;
