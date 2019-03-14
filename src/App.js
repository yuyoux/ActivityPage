import React, { Component, Fragment } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import ActivityPage from "./pages/ActivityPage";
import StocksPage from "./pages/StocksPage";
import VuesPage from "./pages/VuesPage";
import WatchListPage from "./pages/WatchListPage";
import NoMatchPage from "./pages/NoMatchPage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavbarForSmall from "./components/NavbarForSmall";
import Hidden from "@material-ui/core/Hidden";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hidden only={["sm", "xs"]}>
          <Router>
            <Fragment>
              <Navbar />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/dashboard" component={HomePage} />
                <Route path="/vues" component={VuesPage} />
                <Route path="/stocks" component={StocksPage} />
                <Route path="/watchlist" component={WatchListPage} />
                <Route path="/activities" component={ActivityPage} />
                <Route component={NoMatchPage} />
              </Switch>
            </Fragment>
          </Router>
        </Hidden>
        <Hidden only={["lg", "md"]}>
          <Router>
            <Fragment>
              <NavbarForSmall />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/dashboard" component={HomePage} />
                <Route path="/vues" component={VuesPage} />
                <Route path="/stocks" component={StocksPage} />
                <Route path="/watchlist" component={WatchListPage} />
                <Route path="/activities" component={ActivityPage} />
                <Route component={NoMatchPage} />
              </Switch>
            </Fragment>
          </Router>
        </Hidden>
      </div>
    );
  }
}

export default App;
