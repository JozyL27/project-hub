import React from "react";
import Button from "@material-ui/core/Button";
import { useAuth0 } from "@auth0/auth0-react";
import "./LandingPage.css";

const LandingPage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
      <section className="landingContainer">
        <h2>Welcome to Project Hub 🚀💫</h2>
        <p className="landingPara">
          This site allows you to create a list of all your past, current, and
          future projects! Login in or sign up by using the button below.
        </p>
        {!isAuthenticated ? (
          <Button
            color="primary"
            variant="contained"
            onClick={() => loginWithRedirect()}
          >
            Login
          </Button>
        ) : null}
      </section>
    </>
  );
};

export default LandingPage;
