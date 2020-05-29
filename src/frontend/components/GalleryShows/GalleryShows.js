import React from "react";
import TvShow from "../TvShow/TvShow.js";
import "./GalleryShows.css";
import arrayTvShows from "./gallery_get.js";

export default function GalleryShows() {
  fetch("/rest/shows/")
    .then((response) => response.json())
    .then((data) => console.log(data));
  
  return (
    <div className="GalleryShows">
      <h1 className="heading">My Series</h1>
      <div className="container">
        {arrayTvShows().map((tvShow) => (
          <TvShow
            key={tvShow.id}
            id={tvShow.id}
            title={tvShow.title}
            picture={tvShow.picture}
        />))}
     
      </div>
    </div>
  );
}
