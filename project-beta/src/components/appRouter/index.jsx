import * as React from "react";
import { Route } from "react-router-dom";
import App from "../app";

export const AppRouter = () => (
  <div>
    <Route exact path="/" component={App} />
  </div>
);
