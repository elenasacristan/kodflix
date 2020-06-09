import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./Details.css";
import BackButton from "../BackButton/BackButton.js";
import Spinner from "../Spiner/Spiner.js";

export default function Details({ match }) {
  const [tvShow, setTvShow] = useState({});
  const [resultsLoaded, setResultsLoaded] = useState(false);

  let idTvShow = match.params.idTvShow;

  useEffect(() => {
    fetch("/rest/shows")
      .then((response) => response.json())
      .then((data) => {
        let tvShow = data.find((show) => show.id === idTvShow);
        setTvShow(tvShow);
        setResultsLoaded(true);
      });
  }, []);
  
    if (!tvShow) {
        return <Redirect to="/not-found" />;
      } else if (!resultsLoaded) {
        return <Spinner />;
      } else {
        return (
          <div className="Details">
            <h2 className="heading">{tvShow.title}</h2>
            <div className="Details-container">
              <p className="Details-synopsis">{tvShow.synopsis}</p>
              <div className="Details-picture">
                <img
                  src={require(`../../common/images/${tvShow.id}.jpg`)}
                  alt="{tvShow.title}"
                />
              </div>
            </div>
            <BackButton />
          </div>
        );
      }  
}


