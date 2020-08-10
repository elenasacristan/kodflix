import React from "react";
import { Link } from "react-router-dom";
import "./PlayButton.css";

export default function PlayButton({ showTitle }) {
    return (
        <Link className="PlayButton" to={`/${showTitle}/play`}>Play Trailer</Link>
    );
}
 


