import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Layout from "./Component/Layout";
import "./App.scss";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import Footer from "./Component/Footer";
import Loading from "./Component/Loading";
import Work from "./Pages/Work";

const Page404 = () => {
  return <div>Page404</div>;
};

class App extends Component {
  state = {
    isLoading: true
  };
  componentDidMount = () => {
    window.addEventListener("load", () =>
      this.setState({
        isLoading: false
      })
    );
  };
  render() {
    return (
      <HashRouter>
        <Layout>
          <Header />
          {this.state.isLoading && <Loading />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/work" component={Work} />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </Layout>
      </HashRouter>
    );
  }
}

export default App;
