import React, { useState, useEffect } from "react";
import "./Play.css";
import Spinner from "../Spiner/Spiner.js";


export default function Play({ match }) {
  const [tvShow, setTvShow] = useState({});
  const [resultsLoaded, setResultsLoaded] = useState(false);

  useEffect(() => {
    fetch(`/rest/shows/${match.params.TitleTvShow}`)
      .then((response) => response.json())
      .then((data) => {
        setTvShow(data);
        setResultsLoaded(true);
      });
  }, [match.params.TitleTvShow]);

  if (!resultsLoaded) {
    return <Spinner />;
  } else {
    return (
      <div className="Play">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${tvShow.videoId}`}
        ></iframe>
      </div>
    );
  }
}
