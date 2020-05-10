import React from "react";
import { Router } from "@reach/router";
import Home from "./pages/index";
const Routes = ({ props }) => {
  return (
    <Router>
      <Home path="/" props={props} />
    </Router>
  );
};

export default Routes;
