import React from "react";
import { Route, Switch } from "react-router";
import HelloEarthlings from "./components/HelloEarthlings";
import NotFound from "./components/NotFound";

const routes = (
  <Switch>
    <Route exact path="/" component={HelloEarthlings} />
    <Route component={NotFound} />
  </Switch>
);

export default routes;
