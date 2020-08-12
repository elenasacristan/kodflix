import React, { useEffect, useState } from "react";
import "./AdminShowsList.css";
import Spinner from "../../Spiner/Spiner";

export default function AdminShowsList() {
  const [shows, setShows] = useState([]);
  const [resultsLoaded, setResultsLoaded] = useState(false);

  useEffect(() => {
    fetch("/rest/shows", {
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
      <div className="AdminShowsList">
        <h2>Admin area</h2>
        <div className="AdminShowsList-container">
          {shows.map((tvShow) => (
            <p className="AdminShowsList-title" key={tvShow.id}>
              {tvShow.title.split("_").join(" ")}
            </p>
          ))}
        </div>
      </div>
    );
  }
}
