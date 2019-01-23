import * as React from "react";
import { Route } from "react-router-dom";
import App from "../app";
import About from "../About";

export const AppRouter = () => (
  <div>
    <Route exact path="/about" component={About} />
  </div>
);
