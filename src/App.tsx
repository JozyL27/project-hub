import React from "react";
import LandingPage from "./Routes/LandingPage/LandingPage";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
