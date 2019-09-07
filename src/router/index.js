import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../views/Home";
import Countries from "../views/Countries";
import Continents from "../views/Continents";

const AppRoutes = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/countries" exact component={Countries} />
      <Route path="/continents" exact component={Continents} />
    </Router>
  );
};

export default AppRoutes;