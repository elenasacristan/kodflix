import React, { useEffect, useState } from "react";
import "./AdminMoviesList.css";
import Spinner from "../../Spiner/Spiner";

export default function AdminMoviesList() {
  const [shows, setShows] = useState([]);
  const [resultsLoaded, setResultsLoaded] = useState(false);

  useEffect(() => {
    fetch("/rest/movies", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
        setResultsLoaded(true);
      });
  }, []);

  if (!resultsLoaded) {
    return <Spinner />;
  } else {
    return (
      <div className="AdminMoviesList">
        <h2>Admin area</h2>
        <div className="AdminMoviesList-container">
          {shows.map((tvShow) => (
            <p className="AdminMoviesList-title" key={tvShow.id}>
              {tvShow.title.split("_").join(" ")}
            </p>
          ))}
        </div>
      </div>
    );
  }
}
