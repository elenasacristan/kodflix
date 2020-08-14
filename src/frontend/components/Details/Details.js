import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import { Redirect } from "react-router-dom";
import "./Details.css";
import PlayButton from "../PlayButton/PlayButton.js";
import Spinner from "../Spiner/Spiner.js";

function initializeAnalytics(movie) {
  ReactGA.initialize("UA-171302758-1", {
    gaOptions: {
      siteSpeedSampleRate: 100,
    },
  });
  ReactGA.pageview("/" + movie);
}

export default function Details({ match }) {
  const [movie, setMovie] = useState({});
  const [resultsLoaded, setResultsLoaded] = useState(false);

  initializeAnalytics(match.params.Movie);

  useEffect(() => {
    fetch(`/rest/movies/${match.params.Movie}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setResultsLoaded(true);
      });
  }, [match.params.Movie]);

  if (!movie) {
    return <Redirect to="/not-found" />;
  } else if (!resultsLoaded) {
    return <Spinner />;
  } else {
    return (
      <div
        className="Details"
        style={{
          background: `url('covers/${movie.title}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
        }}
      >
        <div className="Details-overlay">
          <h2 className="heading">{movie.title.split("_").join(" ")}</h2>
          <div className="Details-container">
            <p className="Details-synopsis">{movie.synopsis}</p>
          </div>
          <PlayButton showTitle={movie.title}/>
        </div>
      </div>
    );
  }
}
