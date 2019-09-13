import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../views/Home";
import Countries from "../views/Countries";
import Country from "../views/Country";
import Continents from "../views/Continents";
import Continent from '../views/Continent';

const AppRoutes = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/countries" exact component={Countries} />
      <Route path="/countries/:code" exact component={Country} />
      <Route path="/continents" exact component={Continents} />
      <Route path="/continents/:code" exact component={Continent} />
    </Router>
  );
};

export default AppRoutes;
