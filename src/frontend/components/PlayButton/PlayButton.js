import React from "react";
import { Link } from "react-router-dom";
import "./PlayButton.css";
import { FaPlay } from "react-icons/fa";

export default function PlayButton({ showTitle }) {
  return (
    <Link className="PlayButton" to={`/${showTitle}/play`}>
      <FaPlay className="icon-play" />
    </Link>
  );
}
