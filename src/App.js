import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./container/Home";
import Countries from "./container/Countries";
import Continents from "./container/Continents";

import styled from "styled-components";
import "./App.scss";

function App() {
  return (
    <Wrapper>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/countries" exact component={Countries} />
          <Route path="/continents" exact component={Continents} />
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
`;
