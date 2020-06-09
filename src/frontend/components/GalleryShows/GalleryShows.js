import React, { useState, useEffect } from "react";
import TvShow from "../TvShow/TvShow.js";
import "./GalleryShows.css";
import { MdTheaters } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

export default function GalleryShows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    fetch("/rest/shows", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div className="GalleryShows">
      <h1 className="heading">
        Kodflix <MdTheaters className="GalleryShows-icon" />
      </h1>
      <div className="GalleryShows-container">
        {shows.map((tvShow) => (
          <div
            key={tvShow.id}
            data-aos="fade-left"
            className="wrapper-animation"
          >
            <TvShow
              key={tvShow.id}
              id={tvShow.id}
              title={tvShow.title}
              picture={require(`../../common/images/${tvShow.id}.jpg`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
