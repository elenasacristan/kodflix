import React from "react";
import GalleryShows from "./GalleryShows/GalleryShows.js";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from "./Details/Details.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={GalleryShows} />
        <Route path="/details/:id" component={Details} />
      </div>
    </Router>
  );
}

export default App;
