import React from "react";
import ReactGA from "react-ga";
import GalleryShows from "./components/GalleryShows/GalleryShows.js";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/Details/Details.js";
import NotFound from "./components/NotFound/NotFound.js";
import NavBar from "./components/NavBar/NavBar.js";
import ManageMovies from "./components/ManageMovies/ManageMovies.js";
import AdminMovies from "./components/AdminMovies/AdminMovies.js";
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
          <Route exact path="/" component={GalleryShows} />
          <Route exact path="/not-found" component={NotFound} />
          <Route exact path="/manage/movies" component={ManageMovies} />
          <Route exact path="/admin/movies/list" component={AdminMoviesList} />
          <Route exact path="/admin/movies/add" component={AdminMoviesAdd} />
          <Route exact path="/admin/movies/edit" component={AdminMoviesEdit} />
          <Route exact path="/admin/movies" component={AdminMovies} />
          <Route exact path="/:Movie/play" component={Play} />
          <Route exact path="/:Movie" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
