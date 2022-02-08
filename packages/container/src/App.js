import React from "react";
import HelloReactApp from "./components/HelloReactApp";
import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import HelloVueApp from "./components/HelloVueApp";

const history = createBrowserHistory();

const Header = () => (
  <div>
    <Link to="/">**** Parent Application</Link>
    <br />
    <Link to="/react">Menu 1 - React App</Link>
    <br />
    <Link to="/vue">Menu 2 - Vue App</Link>
  </div>
);

export default () => {
  return (
    <Router history={history}>
      <Header />
      <hr />
      <Switch>
        <Route path="/vue" component={HelloVueApp} />
        <Route path="/react" component={HelloReactApp} />
        <Route path="/" component={HelloReactApp} />
      </Switch>
    </Router>
  );
};
