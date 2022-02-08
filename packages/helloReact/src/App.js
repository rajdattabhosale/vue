import React from "react";
import { Switch, Route, Router, Link } from "react-router-dom";

const helloWorld = () => <div>Hello World!</div>;
const helloReact = () => <div>Hello React!</div>;

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/react" component={helloReact} />
          <Route path="/" component={helloWorld} />
        </Switch>
        <br />
        <h1>React Home</h1>
        <Link to="/react">****Say React</Link>
        <br />
        <Link to="/">Say Hello ** to the World ***</Link>
      </Router>
    </div>
  );
};
