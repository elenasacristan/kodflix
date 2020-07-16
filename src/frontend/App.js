import React from "react";
import ReactGA from "react-ga";
import GalleryShows from "./components/GalleryShows/GalleryShows.js";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/Details/Details.js";
import NotFound from "./components/NotFound/NotFound.js";
import NavBar from "./components/NavBar/NavBar.js";

function initializeAnalytics() {
  ReactGA.initialize("UA-171302758-1", {
    gaOptions: {
      siteSpeedSampleRate: 100,
    },
  });
  ReactGA.pageview("/");
}

function App() {
  initializeAnalytics();

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={GalleryShows} />
          <Route exact path="/not-found" component={NotFound} />
          <Route exact path="/:TitleTvShow" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
