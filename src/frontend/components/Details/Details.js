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
  const [tvShow, setTvShow] = useState({});
  const [resultsLoaded, setResultsLoaded] = useState(false);

  initializeAnalytics(match.params.TitleTvShow);

  useEffect(() => {
    fetch(`/rest/shows/${match.params.TitleTvShow}`)
      .then((response) => response.json())
      .then((data) => {
        setTvShow(data);
        setResultsLoaded(true);
      });
  }, [match.params.TitleTvShow]);

  if (!tvShow) {
    return <Redirect to="/not-found" />;
  } else if (!resultsLoaded) {
    return <Spinner />;
  } else {
    return (
      <div
        className="Details"
        style={{
          background: `url('covers/${tvShow.title}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
        }}
      >
        <div className="Details-overlay">
          <h2 className="heading">{tvShow.title.split("_").join(" ")}</h2>
          <div className="Details-container">
            <p className="Details-synopsis">{tvShow.synopsis}</p>
          </div>
          <PlayButton showTitle={tvShow.title}/>
        </div>
      </div>
    );
  }
}
