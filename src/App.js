import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Layout from "./Component/Layout";
import "./App.scss";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import Footer from "./Component/Footer";

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
          <Footer />
        </Layout>
      </HashRouter>
    );
  }
}

export default App;
