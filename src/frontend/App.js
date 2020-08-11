import React from "react";
import ReactGA from "react-ga";
import GalleryShows from "./components/GalleryShows/GalleryShows.js";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/Details/Details.js";
import NotFound from "./components/NotFound/NotFound.js";
import NavBar from "./components/NavBar/NavBar.js";
import ManageTvShows from "./components/ManageTvShows/ManageTvShows.js";
import AdminTvShows from "./components/AdminTvShows/AdminTvShows.js";
import Play from "./components/Play/Play.js";
import AdminShowsList from "./components/AdminTvShows/AdminShowsList/AdminShowsList.js";
import AdminShowsAdd from "./components/AdminTvShows/AdminShowsAdd/AdminShowsAdd.js";
import AdminShowsEdit from "./components/AdminTvShows/AdminShowsEdit/AdminShowsEdit.js";

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
          <Route exact path="/manage/tv-shows" component={ManageTvShows} />
          <Route exact path="/admin/tv-shows/list" component={AdminShowsList} />
          <Route exact path="/admin/tv-shows/add" component={AdminShowsAdd} />
          <Route exact path="/admin/tv-shows/edit" component={AdminShowsEdit} />
          <Route exact path="/admin/tv-shows" component={AdminTvShows} />
          <Route exact path="/:TitleTvShow/play" component={Play} />
          <Route exact path="/:TitleTvShow" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
