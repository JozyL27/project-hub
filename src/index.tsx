import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { snackbarStore } from "./SnackbarStore/snackbarStore";
import { StoreProvider } from "easy-peasy";

const domain = process.env.REACT_APP_AUTH0_DOMAIN || "";
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || "";

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <StoreProvider store={snackbarStore}>
        <App />
      </StoreProvider>
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
