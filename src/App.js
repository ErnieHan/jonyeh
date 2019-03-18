import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Component/Layout";
import "./App.scss";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import Footer from "./Component/Footer";
import Loading from "./Component/Loading";
import Work from "./Pages/Work";
import Work01 from "./Pages/Work01";
import Work02 from "./Pages/Work02";
import Work03 from "./Pages/Work03";
import Work04 from "./Pages/Work04";

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
      <Router>
        <Layout>
          <Header />
          {this.state.isLoading && <Loading />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/work01" component={Work01} />
            <Route exact path="/work02" component={Work02} />
            <Route exact path="/work03" component={Work03} />
            <Route exact path="/work04" component={Work04} />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </Layout>
      </Router>
    );
  }
}

export default App;
