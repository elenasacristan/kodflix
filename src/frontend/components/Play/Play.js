import React, { useState, useEffect } from "react";
import "./Play.css";
import Spinner from "../Spiner/Spiner.js";


export default function Play({ match }) {
  const [movie, setMovie] = useState({});
  const [resultsLoaded, setResultsLoaded] = useState(false);

  useEffect(() => {
    fetch(`/rest/shows/${match.params.Movie}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setResultsLoaded(true);
      });
  }, [match.params.Movie]);

  if (!resultsLoaded) {
    return <Spinner />;
  } else {
    return (
      <div className="Play">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${movie.videoId}`}
          title={movie.title}
        ></iframe>
      </div>
    );
  }
}
