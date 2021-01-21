import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { DataTable } from '../components/DataTable';

export const MainRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <DataTable />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
