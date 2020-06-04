import React, { useState } from "react";
import TvShow from "../TvShow/TvShow.js";
import "./GalleryShows.css";

export default function GalleryShows() {
  const [shows, setShows] = useState([]);

  fetch("/rest/shows", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => setShows(data));

  return (
    <div className="GalleryShows">
      <h1 className="heading">My Series</h1>
      <div className="container">
        {shows.map((tvShow) => (
          <TvShow
            key={tvShow.id}
            id={tvShow.id}
            title={tvShow.title}
            picture={require(`../../common/images/${tvShow.id}.jpg`)}
          />
        ))}
      </div>
    </div>
  );
}
