import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './container/Home';
import "./App.scss";

function App() {
  return (
    <>
    <Header />
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
