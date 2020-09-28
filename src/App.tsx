import React from "react";
import LandingPage from "./Routes/LandingPage/LandingPage";
import LoginPage from "./Routes/LoginPage/LoginPage";
import RegistrationPage from "./Routes/RegistrationPage/RegistrationPage";
import Header from "./Components/Header/Header";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegistrationPage} />
      </Switch>
    </div>
  );
}

export default App;
