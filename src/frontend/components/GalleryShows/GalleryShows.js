import React, { useState, useEffect } from "react";
import TvShow from "../TvShow/TvShow.js";
import "./GalleryShows.css";
import Spinner from "../Spiner/Spiner.js";
import Aos from "aos";
import "aos/dist/aos.css";

export default function GalleryShows() {
  const [shows, setShows] = useState([]);
  const [resultsLoaded, setResultsLoaded] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
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
      <div className="GalleryShows">
        
        <div className="GalleryShows-container">
          {shows.map((tvShow, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="wrapper-animation"
            >
              <TvShow
                id={tvShow.id}
                title={tvShow.title}
                picture={require(`../../common/images/${tvShow.title}.jpg`)}

                // picture={require(`../../common/images/${tvShow.title}.jpg`)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
