import * as React from "react";
import { Route } from "react-router-dom";
import About from "../about";

export const AppRouter = () => (
  <div>
    <Route exact path="/about" component={About} />
  </div>
);
