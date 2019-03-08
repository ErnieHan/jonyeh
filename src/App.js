import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

const Home = () => {
  return <div>123</div>;
};

const Page404 = () => {
  return <div>Page404</div>;
};

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="layout">
          <div>Header</div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Page404} />
          </Switch>
          <div>Footer</div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
