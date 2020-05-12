import React from "react";
import { Link } from "react-router-dom";
import "./TvShow.css"

export default function TvShow(props) {
  return (
    <Link to={"/details/" + props.id} className="link-movie">
      <div className="item">
        <img src={props.picture} alt={props.title + "cover"} />
        <div className="overlay-title">
          <h2>{props.title}</h2>
        </div>
      </div>
    </Link>
  );
}
