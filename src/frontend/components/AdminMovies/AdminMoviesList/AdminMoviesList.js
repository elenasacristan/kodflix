import React, { useEffect, useState } from "react";
import "./AdminMoviesList.css";
import Spinner from "../../Spiner/Spiner";
import { Link, useHistory } from "react-router-dom";

export default function AdminMoviesList() {
  const [shows, setShows] = useState([]);
  const [resultsLoaded, setResultsLoaded] = useState(false);

  const history = useHistory();

  const deleteShow = (id) => {
    fetch(`/rest/delete/${id}`, {
      method: "DELETE",
    });
    history.push(`/`);
  }

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
            <div className="AdminMoviesList-title" key={tvShow._id}>
              <p>{tvShow.title.split("_").join(" ")}</p>
              <Link to={`/admin/movies/edit/${tvShow.title}`}>Edit</Link>
              <button onClick={() => deleteShow(tvShow._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
