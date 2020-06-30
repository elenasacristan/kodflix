import React from "react";
import { Link } from "react-router-dom";
import "./TvShow.css"

export default function TvShow(props) {
  return (
    <Link to={"/" + props.title} className="TvShow">
      <div className="TvShow-item">
        <img src={props.picture} alt={props.title + " cover"} />
        <div className="TvShow-overlay-title">
          <h2>{props.title.split('_').join(' ')}</h2>
        </div>
      </div>
    </Link>
  );
}
