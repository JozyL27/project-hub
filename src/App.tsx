import React from "react";
import LandingPage from "./Routes/LandingPage/LandingPage";
import Header from "./Components/Header/Header";
import { Switch, Route } from "react-router-dom";
import AppList from "./Routes/AppList/AppList";
import ListPage from "./Routes/ListPage/ListPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/lists" component={AppList} />
        <Route exact path="/list/:listId" component={ListPage} />
      </Switch>
    </div>
  );
}

export default App;
