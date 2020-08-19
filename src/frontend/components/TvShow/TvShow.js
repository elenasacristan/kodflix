import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./TvShow.css";
import Spinner from "../Spiner/Spiner.js";


export default function TvShow(props) {
  const [image, setImage] = useState("");
  const [resultsLoaded, setResultsLoaded] = useState(false);

  useEffect(() => {
    fetch(`/covers/${props.title}`)
      .then((data) => {
        setImage(`/covers/${props.title}`);
        setResultsLoaded(true);
      });
  }, [props.title]);

  if (!resultsLoaded) {
    return <Spinner />;
  } else {
    return (
      <Link to={"/" + props.title} className="TvShow">
        <div className="TvShow-item">
          <img src={image} alt={props.title + " cover"} />
          <div className="TvShow-overlay-title">
            <h2>{props.title.split("_").join(" ")}</h2>
          </div>
          <div className="TvShow-overlay-hover"></div>
        </div>
      </Link>
    );
  }
}
