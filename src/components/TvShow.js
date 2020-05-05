import React from "react";

function TvShow(props) {
  return (
    <div className="item">
      <img src={props.picture} alt={props.title + "cover"} />
      <div className="overlay-title">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

export default TvShow;
