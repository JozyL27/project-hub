import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div
      onClick={() => loginWithRedirect()}
      className="logDiv"
      style={{ cursor: "pointer", margin: "0 10px 0 10px" }}
    >
      Login
    </div>
  );
};

export default LoginButton;
