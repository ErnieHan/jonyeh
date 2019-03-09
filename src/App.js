import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Layout from "./Component/Layout";
import "./App.scss";
import Header from "./Component/Header";

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
        <Layout>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Page404} />
          </Switch>
          <div>Footer</div>
        </Layout>
      </HashRouter>
    );
  }
}

export default App;
