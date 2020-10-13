import React, { lazy, Suspense } from "react";
import LandingPage from "./Routes/LandingPage/LandingPage";
import Header from "./Components/Header/Header";
import { Switch, Route } from "react-router-dom";
const ListPage = lazy(() => import("./Routes/ListPage/ListPage"));
const AppList = lazy(() => import("./Routes/AppList/AppList"));
const ProjectPage = lazy(() => import("./Routes/ProjectPage/ProjectPage"));
const NotFound = lazy(() => import("./Routes/NotFound/NotFound"));

const App = () => {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<p>...loading</p>}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/lists" component={AppList} />
          <Route exact path="/list/:listId" component={ListPage} />
          <Route exact path="/project/:projectId" component={ProjectPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
