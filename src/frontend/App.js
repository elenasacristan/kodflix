import ReactGA from "react-ga";
import React, {useEffect} from "react";
import GalleryShows from "./components/GalleryShows/GalleryShows.js";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/Details/Details.js";
import NotFound from "./components/NotFound/NotFound.js";
import history from 'history/browser';

function App() {
  
  useEffect(() => {
    ReactGA.initialize("UA-171302758-1");
    let location = history.location;

    trackPageView(location);

    history.listen((location) => this.trackPageView(location));
  }, []);

  const trackPageView = (location) => ReactGA.pageview(location.pathname + location.search + location.hash);
  
  return (
    <div className="App">
      <Router>
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
