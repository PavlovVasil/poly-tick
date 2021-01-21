import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Councillors, Councils, Affairs } from '../views'
import { TopNav } from '../components/TopNav';

export const MainRouter = () => {
  return (
    <Router>
      <TopNav />
        <Switch>
          <Route exact path="/">
            <Councillors />
          </Route>
          <Route exact path="/councils">
            <Councils />
          </Route>
          <Route exact path="/affairs">
            <Affairs />
          </Route>
        </Switch>
    </Router>
  );
}
