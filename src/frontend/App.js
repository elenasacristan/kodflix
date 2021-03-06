import React from "react";
import ReactGA from "react-ga";
import GalleryMovies from "./components/GalleryMovies/GalleryMovies.js";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/Details/Details.js";
import NotFound from "./components/NotFound/NotFound.js";
import NavBar from "./components/NavBar/NavBar.js";
import Play from "./components/Play/Play.js";
import AdminMoviesList from "./components/AdminMovies/AdminMoviesList/AdminMoviesList.js";
import AdminMoviesAdd from "./components/AdminMovies/AdminMoviesAdd/AdminMoviesAdd.js";
import AdminMoviesEdit from "./components/AdminMovies/AdminMoviesEdit/AdminMoviesEdit.js";

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
          <Route exact path="/" component={GalleryMovies} />
          <Route exact path="/not-found" component={NotFound} />
          <Route exact path="/admin/movies/list" component={AdminMoviesList} />
          <Route exact path="/admin/movies/add" component={AdminMoviesAdd} />
          <Route exact path="/admin/movies/edit/:movieId" component={AdminMoviesEdit} />
          <Route exact path="/:Movie/play" component={Play} />
          <Route exact path="/:Movie" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
